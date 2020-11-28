# REX

## UI Themes

- setting up npm, `sandbox` version, PR policy

- components walk thru, find tools and components to focus on

- [bootstrap out transition](https://react-bootstrap.github.io/utilities/transitions/)

- react select, example on prototype

- ```
  Error: ENOENT: no such file or directory, open '/Users/nfrota/Library/Application Support/Code/User/projects.json'
  ```

  -
  Visual Studio Code 2.0.2
  Alfred 3.8.1
  darwin x64 18.5.0

## Market Trends

- erosion of subscription system
- ramping up one-time purchases
- targeting content selectors, influencer
- boston college
  - unpublished material (never sighted)

## Gatsby Publish

1. `gatsby build`
2. rename as latest or branch
3. drop on s3
4. Jenkins
5. Announce

## Audience

- editorial review only
- editorial and peer review
- all (editorial, peer review, publication)

## Objects

- Authoria
- Manuscript

## Publish

```
cd
cd ~/Documents
ls

cd wiley/REX/prototype/
gatsby build --prefix-paths
rm -R master/
cp -a public/. master/
rm -R ../aws/master
mv master ../aws
rm -R public/
open /Applications/Cyberduck.app
open http://jenkins-wdev.aws.wiley.com:8080/job/REX/job/DEPLOY_NONPROD/job/ui-prototype/build?delay=0sec

```

## Story Workflow

- When I’m done with story, but design needs update, I should assign it to Nicholas
- When Nicolas is done with design, but story needs update, Nicholas should assign to me
- When a story is ready to be presented for final tech review, it is assigned to “unassigned”
- When handover is agreed, it is assigned to Gary to move over to spec complete

## REX UX/business discovery

Reisch, Danielle <dreisch@wiley.com>; Spencer, Gary <gspencer@wiley.com>; Levine, Rachael <rlevine@wiley.com>

Leskovets, Anatoly <aleskov2@wiley.com>; Imaykin, Aleksandr <aimaykin@wiley.com>; Akibov, Ruslan <rakibov@wiley.com>; Malyshev, Valeriy <vmalysh2@wiley.com>; Rykovanov, Denis <drykovanov@wiley.com>

## REX/AS Common Design

## [**Agenda**](https://teams.microsoft.com/l/entity/com.microsoft.teamspace.tab.wiki/tab::48b3e129-30fa-474d-8e50-7fc464a2b67b?context=%7B%22subEntityId%22%3A%22%7B%5C%22pageId%5C%22%3A2%2C%5C%22sectionId%5C%22%3A6%2C%5C%22origin%5C%22%3A2%7D%22%2C%22channelId%22%3A%2219%3A09bd00db691142b9bd08401b379f9531%40thread.skype%22%7D&tenantId=24fe244f-890e-46ef-be2f-a5202976b7a5)

## clickable prototype, new object

- create page
- import component
- list on index
- label it correctly
- title
- referenceREX

## list alerts

## moving to scholarone

- new to S1
- return to S1
- desk reject
