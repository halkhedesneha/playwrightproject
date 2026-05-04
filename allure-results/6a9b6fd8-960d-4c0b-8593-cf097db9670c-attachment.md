# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tcddt.spec.js >> Login Test TC02
- Location: tests\tcddt.spec.js:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[value="Log In"]')
    - locator resolved to <input type="submit" class="button" value="Log In"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    4 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic:
  - generic [ref=e1]:
    - generic [ref=e2]:
      - link:
        - /url: admin.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - img [ref=e3]
      - link "ParaBank":
        - /url: index.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - img "ParaBank" [ref=e4]
      - paragraph [ref=e5]: Experience the difference
    - generic [ref=e6]:
      - list [ref=e7]:
        - listitem [ref=e8]: Solutions
        - listitem [ref=e9]:
          - link "About Us" [ref=e10]:
            - /url: about.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - listitem [ref=e11]:
          - link "Services" [ref=e12]:
            - /url: services.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - listitem [ref=e13]:
          - link "Products" [ref=e14]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e15]:
          - link "Locations" [ref=e16]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e17]:
          - link "Admin Page" [ref=e18]:
            - /url: admin.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
      - list [ref=e19]:
        - listitem [ref=e20]:
          - link "home" [ref=e21]:
            - /url: index.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - listitem [ref=e22]:
          - link "about" [ref=e23]:
            - /url: about.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - listitem [ref=e24]:
          - link "contact" [ref=e25]:
            - /url: contact.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
    - generic [ref=e26]:
      - generic [ref=e27]:
        - heading "Customer Login" [level=2] [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - paragraph [ref=e31]: Username
            - textbox [ref=e33]: john
            - paragraph [ref=e34]: Password
            - textbox [active] [ref=e36]: wrongpass
            - button "Log In" [ref=e38] [cursor=pointer]
          - paragraph [ref=e39]:
            - link "Forgot login info?" [ref=e40]:
              - /url: lookup.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
          - paragraph [ref=e41]:
            - link "Register" [ref=e42]:
              - /url: register.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
      - generic [ref=e43]:
        - list [ref=e45]:
          - listitem [ref=e46]: ATM Services
          - listitem [ref=e47]:
            - link "Withdraw Funds" [ref=e48]:
              - /url: services/ParaBank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?wsdl
          - listitem [ref=e49]:
            - link "Transfer Funds" [ref=e50]:
              - /url: services/ParaBank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?wsdl
          - listitem [ref=e51]:
            - link "Check Balances" [ref=e52]:
              - /url: services/ParaBank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?wsdl
          - listitem [ref=e53]:
            - link "Make Deposits" [ref=e54]:
              - /url: services/ParaBank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?wsdl
        - list [ref=e55]:
          - listitem [ref=e56]: Online Services
          - listitem [ref=e57]:
            - link "Bill Pay" [ref=e58]:
              - /url: services/bank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?_wadl&_type=xml
          - listitem [ref=e59]:
            - link "Account History" [ref=e60]:
              - /url: services/bank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?_wadl&_type=xml
          - listitem [ref=e61]:
            - link "Transfer Funds" [ref=e62]:
              - /url: services/bank;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562?_wadl&_type=xml
        - paragraph [ref=e63]:
          - link "Read More" [ref=e64]:
            - /url: services.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - heading "Latest News" [level=4] [ref=e65]
        - list [ref=e66]:
          - listitem [ref=e67]: 05/03/2026
          - listitem [ref=e68]:
            - link "ParaBank Is Now Re-Opened" [ref=e69]:
              - /url: news.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562#6
          - listitem [ref=e70]:
            - link "New! Online Bill Pay" [ref=e71]:
              - /url: news.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562#5
          - listitem [ref=e72]:
            - link "New! Online Account Transfers" [ref=e73]:
              - /url: news.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562#4
        - paragraph [ref=e74]:
          - link "Read More" [ref=e75]:
            - /url: news.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
  - generic [ref=e76]:
    - list [ref=e77]:
      - listitem [ref=e78]:
        - link "Home" [ref=e79]:
          - /url: index.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - text: "|"
      - listitem [ref=e80]:
        - link "About Us" [ref=e81]:
          - /url: about.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - text: "|"
      - listitem [ref=e82]:
        - link "Services" [ref=e83]:
          - /url: services.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - text: "|"
      - listitem [ref=e84]:
        - link "Products" [ref=e85]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e86]:
        - link "Locations" [ref=e87]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e88]:
        - link "Forum" [ref=e89]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e90]:
        - link "Site Map" [ref=e91]:
          - /url: sitemap.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
        - text: "|"
      - listitem [ref=e92]:
        - link "Contact Us" [ref=e93]:
          - /url: contact.htm;jsessionid=9A4B136AADF3E3AC9B603D212CDC0562
    - paragraph [ref=e94]: © Parasoft. All rights reserved.
    - list [ref=e95]:
      - listitem [ref=e96]: "Visit us at:"
      - listitem [ref=e97]:
        - link "www.parasoft.com" [ref=e98]:
          - /url: http://www.parasoft.com/
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
  12 |     await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  13 | 
  14 |     // wait for username field
  15 |     await page.locator('input[name="username"]').waitFor();
  16 | 
  17 |     await page.fill('input[name="username"]', row.Username || "");
  18 |     await page.fill('input[name="password"]', row.Password || "");
  19 | 
> 20 |     await page.click('input[value="Log In"]');
     |                ^ Error: page.click: Test timeout of 30000ms exceeded.
  21 | 
  22 |     await page.waitForTimeout(2000);
  23 | 
  24 | });
  25 | }
```