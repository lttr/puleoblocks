#!/usr/bin/env -S deno run --allow-env --allow-sys --allow-run --allow-read --allow-write

// This script can bu run with `deno` on the PATH like this:
// > ./tailblocks-screenshots.ts

// This script takes screenshots of the Tailblocks website using Playwright
// The website has to be running on http://localhost:3001/
// The website's repo is at https://github.com/mertJF/tailblocks
// It outputs the screenshots to the `tailblocks-screenshots` directory

import { chromium } from "npm:playwright"

async function screenshotTailblocks() {
  // Create output directory if it doesn't exist
  const outputDir = "./tailblocks-screenshots"
  try {
    await Deno.mkdir(outputDir, { recursive: true })
  } catch (error) {
    if (!(error instanceof Deno.errors.AlreadyExists)) {
      throw error
    }
  }

  // Launch browser with a larger viewport
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, // Start with a large viewport
  })
  const page = await context.newPage()

  // Navigate to the website
  await page.goto("http://localhost:3001/")

  // Wait for the page to be fully loaded
  await page.waitForLoadState("networkidle")

  // Get all buttons in the sidebar
  const sidebarButtons = await page.$$("aside.sidebar button")
  const buttonCount = sidebarButtons.length
  console.log(`Found ${buttonCount} buttons in the sidebar`)

  // Click each button and take a screenshot
  for (let i = 0; i < buttonCount; i++) {
    try {
      // Get fresh references to buttons on each iteration to avoid stale element references
      const buttons = await page.$$("aside.sidebar button")
      const button = buttons[i]

      // Get some identifier text from the button to use in the filename
      const buttonText = (await button.textContent()) || `section-${i + 1}`
      const safeButtonText = buttonText
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()

      // Click the button using page.evaluate to bypass overlay issues
      await page.evaluate((el) => el.click(), button)

      // Wait for content to update
      await page.waitForTimeout(1000)

      // Remove unnecessary elements
      await page.evaluate(() => {
        document.querySelectorAll(".github").forEach((el) => el.remove())
        document.querySelectorAll(".keyboard-nav").forEach((el) => el.remove())
      })

      // Get the view div element
      const viewDiv = await page.$("div.view")

      if (viewDiv) {
        // Get the full height of the view element
        const boundingBox = await viewDiv.boundingBox()

        if (boundingBox) {
          // Adjust viewport height to fit the content
          const viewHeight = Math.ceil(boundingBox.height) + 50 // Add some padding
          await page.setViewportSize({ width: 1920, height: viewHeight })

          // Take screenshot of the view div
          const screenshotPath = `${outputDir}/${safeButtonText}.png`
          await viewDiv.screenshot({ path: screenshotPath })
          console.log(`Screenshot saved: ${screenshotPath}`)
        }
      } else {
        console.error("View div not found")
      }
    } catch (error) {
      console.error(`Error processing button ${i + 1}:`, error)
      // Continue with next button even if this one fails
    }
  }

  // Close browser
  await browser.close()
  console.log("All screenshots completed!")
}

// Run the function
screenshotTailblocks().catch(console.error)
