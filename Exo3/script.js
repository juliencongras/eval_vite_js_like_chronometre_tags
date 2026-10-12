const tagForm = document.querySelector("#tagsInputsContainer");
const tagInput = document.querySelector("#tagInputText");
const existingTagWarning = document.querySelector("#existingTagWarning");
const existingTagsContainerPastilles = document.querySelector("#existingTagsContainerPastilles");
const existingTagsContainerText = document.querySelector("#existingTagsContainerText");

let submittedTags = [];

tagForm.addEventListener("submit", function(e){
    e.preventDefault();

    if(submittedTags.includes(tagInput.value)){
        existingTagWarning.style.display = "block";
        existingTagWarning.innerText = `Le tag "${tagInput.value}" existe déjà !`
    }
    else{
        existingTagWarning.style.display = "none";
        submittedTags.push(tagInput.value);
        const newPastille = document.createElement("div");
        newPastille.classList.add("pastille");
        newPastille.innerText = tagInput.value;
        existingTagsContainerPastilles.appendChild(newPastille);
        tagForm.reset();
        existingTagsContainerText.innerText = `Tags : ${submittedTags.join(", ")}`;
    }
});