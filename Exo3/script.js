const tagForm = document.querySelector("#tagsInputsContainer");
const tagInput = document.querySelector("#tagInputText");
const existingTagWarning = document.querySelector("#existingTagWarning");
const existingTagsContainerText = document.querySelector("#existingTagsContainerText");

let submittedTags = [];

tagForm.addEventListener("submit", function(e){
    e.preventDefault();

    existingTagWarning.innerText = `Le tag "${tagInput.value}" existe déjà !`

    submittedTags.push(tagInput.value);
    tagForm.reset();
    existingTagsContainerText.innerText = `Tags : ${submittedTags.join(", ")}`;
})