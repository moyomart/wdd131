document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    const input = document.querySelector('#favchap');
    const button = document.querySelector('#butn');


    const chaptersArray = [{

    }];

   getChapterList() => {
        
    };

    button.addEventListener('click', () => {
        const userInput = input.value;

        if (userInput.trim() !== '') {

            const listItem = document.createElement('li');
            listItem.textContent = userInput.trim();

            //create the close button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.style.marginLeft = '0.5rem';

            deleteBtn.addEventListener('click', () => {
                list.removeChild(listItem);
            });

            //appending delete button to the list item
            listItem.append(deleteBtn);

            //appending list item to the unordered list of chapters
            list.append(listItem);

        } else {
            alert('Please enter a valid chapter.');
        }


        input.value = '';
        input.focus();

    });

});


//Current year to insert into current year span
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;