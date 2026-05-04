# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tcddt.spec.js >> Login Test TC01
- Location: tests\tcddt.spec.js:10:1

# Error details

```
Error: page.goto: SSL connect error
Call log:
  - navigating to "https://parabank.parasoft.com/parabank/index.htm", waiting until "load"

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const XLSX = require('xlsx');
  3  | 
  4  | const workbook = XLSX.readFile('./testdata/parabank_login_data.xlsx');
  5  | const sheet = workbook.Sheets['LoginData'];
  6  | const data = XLSX.utils.sheet_to_json(sheet);
  7  | 
  8  | for (const row of data) {
  9  | 
  10 | test(`Login Test ${row.TestCaseID}`, async ({ page }) => {
  11 | 
> 12 |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
     |                ^ Error: page.goto: SSL connect error
  13 | 
  14 |     // wait for username field
  15 |     await page.locator('input[name="username"]').waitFor();
  16 | 
  17 |     await page.fill('input[name="username"]', row.Username || "");
  18 |     await page.fill('input[name="password"]', row.Password || "");
  19 | 
  20 |     await page.click('input[value="Log In"]');
  21 | 
  22 |     await page.waitForTimeout(2000);
  23 | 
  24 | });
  25 | }
```