# UAT 12

## Author deletes draft submission

- submission filters have excess padding (see 01, fail and pass)
- the loading when you delete is such a great touch! can we make it black?

## Funders

- 404

## Reupload

# UAT 11

First of all, everything looks great... We're almost there and it shows. Good job.

Now, to the discrepancies:

1. "Nothing to see here" (image 01) `.submissionsListEmptyItem-title` should be padding top 0 and padding bottom 10px
1. Select
   1. follow button shadow (`:hover` and not. it's using bootstrap defaults for now)
   1. select itself and select items should be `cursor: pointer` (image 02)
   1. select item needs transition (same as button)
1. "Welcome Back" select should follow same design as other select
1. footer font-size should be 12px (image 03)
1. shouldn't login info follow the same error design as all others? (image 04, incorrect)
1. submission card
   1. title and article type go one on top of other, no columns (image 05)
   1. cards have shadow (same as button), border black on hover.
   1. submitted/pending card info design is incorrect (image 06)
1. Select from manuscript
   1. entire screen should be wrapped on a bootstrap modal
   1. "Select Authors", not "Select Author Name(s)"
   1. Shouldn't Manuscript conversion strip text alignment, showing all as left aligned? Question for Gary.
1. Loading

1. design is incorrect (image 07. Use "Loading..." as generic copy)

1. loading should replace all elements below header
1. Table items

1. alert copy should be 16px (image 08)

1. Author Details email alert should nott have column highlights (image 08: those are used only for group errors, not atomic ones)

# UAT 10

## 1415701

1. global header (see 01 image, system and figma)
   1. "welcome back" vertical padding is incorrect
   2. small drop shadow (same as button) missing
2. submission blurb (see 02 image, system and figma)
   1. Journal and article type should be one on top of other, no columns
   2. logo box should be`220px` width, `20px` padding, so logo is `180px` width
   3. blurb has shadow (same as button, header)
   4. description should be `14px`, with column occupying half of grid
   5. bottom padding should be `20px`
3. footer (see 03 image, system and figma)
   1. font size should be `12px`
   2. vertical spacing (top and bottom) should be `40px`
4. select menu border should only turn black on `:hover, :focus`
5. journal header box shadow is off (see 04 image, system and figma)
6. steps (see 05 image, system and figma)
   1. item left bar should be 2px wide
   2. font weight is `semibold`, try `font-weight: 600` instead of `700`
   3. radiobutton should be styled like style guide (use `-webkit-appearance: none` to unlock styling)
7. Suggested and Opposed reviewers are two different items (see 06system image)
8. Loading should use loading.html standalone example

1) "Research Exchange" (see 01 image, system and figma) font weight is `semibold`, try `font-weight: 600`
2) Button (previous UATs)
3) select menu shadow is incorrect (see 07 image, system and figma)

# UAT 1.9

## 5123

1. font looks great, but we use semibold instead of bold. `font-weight` should be `600` instead of `700`
2. Research Article title is not showing (image 01)
3. Button design should comply with style guide (jira 1888) and `button.html` animation (jira 3010)
4. loading should comply with `loading.html` animation (jira 3010)
5. radio buttons should comply with style guide (jira 1888)
6. radio buttons are changing cursor to not-allowed when selected, is there another way to disable it without showing it? This is mac / firefox
7. text editor/file upload
   1. "Upload a file", "Use the editor" link should be normal font size, spacing should be 10px (images 02, 03 for error, 04, 05 for correct)
   2. text editor min height is `220px` (image 06, versus https://www.figma.com/file/K2gq5IUi0Gh3SpuTR1C07f/294-1214-Conflict-of-Interest?node-id=275%3A249 )
   3. items and subitems should be integrated (image 07, 08 for error, 09, 10 for correct)
8. suggested and opposed reviewers are 2 separate items, not 1 (image 11, error)
9. Affiliation placeholder should be "Type Affiliation"

## 1319931

1. when file size is less than a MB, we should say "byte" (image 01)
2. I'm fine with adding "view more/less" below copy, but exerpt line should be all visible, and 3 lines at least (image 02)
3. keyword spacing should be 5px (image 03)
4. "view more/less" should not appear if file is provided, nor if entire text appear on excerpt.

## 1319932

1. select from manuscript should be a bootstrap modal
2. warning icon is incorrect (image 01, correct. image 02, error)
3. radio buttons should comply with style guide (image 03, jira 1888)
4. autocomplete padding should be 10px, 5px in between affiliations (image 04, error)

---

# UAT 1.8

## 1248011

1. upload (image 01)
   1. hover state is missing (as per [1754 Upload Single File](https://www.figma.com/file/cPuMkkzoCEl3w4pqkmk9o1vP/1754-Upload-Single-File?node-id=0%3A1))
   2. icon is incorrect (use `icons/upload` as per [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A115)
   3. brackets are used to indicate variables, please remove it
2. remove bold of link (image 02) as per [294 1214 Conflict of Interest](https://www.figma.com/file/K2gq5IUi0Gh3SpuTR1C07f/294-1214-Conflict-of-Interest?node-id=0%3A1)
3. Font should be Open Sans Regular and SemiBold, as per [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=169%3A5). [Get font files](https://github.com/wiley/rex-ui-prototypes/tree/master/static/fonts)
4. Error States
   1. Items should only present error states AFTER user clicks on confirm, not before
   2. Confirm button is never disabled (image 03)
   3. Items are either styled as default or error state, as per [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=203%3A19)
      1. No hybrid states (error vertical line, default title, image 04)
      2. No partial states (main item cleared, subitem with error, image 05). If a subitem has error, the entire item should show error, with form that needs attention highlighted (as it is)
5. Design issues
   1. Button should follow [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A188) and [button.html](https://jira.wiley.com/secure/attachment/541013/button.html) (image 06)
   2. keyword elements should follow [325 Keywords](https://www.figma.com/file/sx2rfGrFx1GOxGQETA8ru9/325-Keywords?node-id=0%3A1) style (icon, no radius, check image 07)
   3. There's a jagged line on errorForm icon (image 08, 09). I dont; know what it means, but if anything re-export `icons/errorForm.svg` from [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A115)
   4. table forms and buttons should be top aligned (image 10, 11) as per [389 Peer Reviewers](https://www.figma.com/file/fS5gSIdlKtXFVwusARRX3AlA/389-Peer-Reviewers?node-id=0%3A1)
   5. Text editor minimum size should be `220px` as per [294 1214 Conflict of Interest](https://www.figma.com/file/K2gq5IUi0Gh3SpuTR1C07f/294-1214-Conflict-of-Interest?node-id=275%3A249) (image 12).
   6. Menu shadow should follow [288 Select and Multi Select](https://www.figma.com/file/K2gq5IUi0Gh3SpuTR1C07f/294-1214-Conflict-of-Interest?node-id=275%3A249) (image 13, 14). It's the same shadow of button `:hover, :focus` at [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A188)
   7. Selected Type of File shouldn't use `:hover` style (image 14), since previous choice is already indicated at top.
6. Copy Issues (this is more for Gary)
   1. Text editor is missing a placeholder copy (image 12). Do we have one?
   2. Type of File (image 14)
      1. Why "Statement" on "Conflict of Interest"?
      2. Uppercase issues: "Main manuscript", "LaTeX supplementary File"

## 1248012

1. Loading icon and animation should follow `icons/loading.svg` from [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A115) (image 01, use animation of [button.html](https://jira.wiley.com/secure/attachment/541013/button.html). Click "Toggle Loading" to see it)
2. Loading state should reveal only title, loading animation, and not description, button
3. Confirm icon should be `icons/next.svg` (instead of ok) from [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A115) (image 02) and it appears AFTER copy (use [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A188) `.btn.btn-primary` as reference)
4. Copy: Since user has to type affiliation in the peer review case, shouldn't we change placeholder from "Enter Affiliation" (image 03) to "Type Affiliation"?

## 1248013

1. Radiobutton should follow style, size and spacing as stated on [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=203%3A119) (image 01)
2. secondary button `:hover, :focus` state (image 02) should follow `.btn` standards as in [1888 Style Guide](https://www.figma.com/file/bz0kjYTMSTRZbuxOwoOnKE/1888-Style-Guide?node-id=170%3A188)
