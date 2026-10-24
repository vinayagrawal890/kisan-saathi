# Manual Test Cases

| ID | Test | Steps | Expected result |
|---|---|---|---|
| TC-01 | Initial page load | Open `index.html` | Three clearly labelled sample listings appear |
| TC-02 | Search | Search for `Wheat` | Only matching listing appears |
| TC-03 | Empty required field | Submit form with a required field blank | Browser validation prevents submission |
| TC-04 | Valid listing | Enter valid farmer, village, crop, quantity and price | New demo listing appears in the list |
| TC-05 | Invalid numeric value | Enter quantity or price below 1 | Browser validation blocks submission |
| TC-06 | Language toggle | Click language button | Main UI labels switch between Hindi/Hinglish and English |
| TC-07 | Responsive layout | Open at a narrow/mobile viewport | Cards and form stack vertically |
| TC-08 | Refresh behavior | Add a listing, then refresh | Added listing disappears; sample data returns |
| TC-09 | Search no match | Search for a non-existent crop | No-results message appears |
| TC-10 | HTML injection safety | Enter text such as `<script>` in a name field | Text is escaped and not executed |
