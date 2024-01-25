## Single Page Next JS Web with GraphQL WordPress Integration

This is a company-requested project. The purpose is to create a career page for the company.

The reason I used Next JS framework for the page is solely to utilize Tailwind and customizable fetched data display using GraphQL from WordPress.

By implementing GraphQL, other colleagues with no coding background will be able to insert or delete new job postings with a familiar interface, which is WordPress. Additionally, the main website of the company is a WordPress website.

[View Website](https://career.idealtech.com.my/)

## Tech Implemented

|  | Tech | Purpose |
| -- | -- | -- |
| <img alt="" src= "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" height="13"> | Next JS 13 App Router | React Framework |
| <img alt="" src= "https://cdn-icons-png.flaticon.com/512/5968/5968381.png" height="13"> | Typescript | JS Syntax |
| <img alt="" src= "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" height="13"> | GraphQL | Query Language API |
| <img alt="" src= "https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?w=422&ssl=1" height="13"> | Nodemailer | Form to Email Handling |
| <img alt="" src= "https://cpanel.net/wp-content/themes/cPbase/assets/img/logos/cp_orange.svg" height="10"> | cPanel | Deployment |
| <img alt="" src= "https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png" height="13"> | Cloudflare | CDN |
| <img alt="" src= "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" height="13"> | WordPress | Headless CMS |

## GraphQL Overview

The implementation or rather the usage of GraphQL was quite easy.

1. Install the GraphQL plugin within Wordpress.
2. Create a customized Post plugin for WordPress to allow users to post or delete job postings.
3. Expose the data from the customized Post plugin to GraphQL API calls.
4. Retrieve the data by using fetch towards the WordPress GraphQL.

The main complication comes from the existence of CDN for the company website. I wasn't able to figure out why the fetch requests were being denied until I realized the CDN was blocking it.

So I created a rule within the CDN to allow specific bots which is the web app, to fetch requests to the WordPress Website.

## Conclusion

The project taught me how GraphQL made integration between WordPress and web apps easier. Which could potentially be a good solution in the future to use WordPress as a Headless CMS. Although, coding with php can be a hassle.

Most importantly, the project taught me to pay attention to CDNs. As most fetch or API calls can produce errors easily due to the CDN. If any error occurs, always check the CDN first.

