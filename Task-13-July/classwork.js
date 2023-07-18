
const name=["sara","raghad","Ali","Ahmad"]
const ages=[20,25,23,23]

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign='center';
function element(name, ages){
    // creat the elemnts
    let card=document.createElement('div');
    let title=document.createElement('h2');
    let age=document.createElement('p');
    let image=document.createElement('img');

    // creat the content
    let head=document.createTextNode(name);
    let ageContent=document.createTextNode(ages);
    image.src='https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg';
    title.appendChild(head);
    age.appendChild(ageContent);

    // style the card
    card.style.width='200px';
    card.style.background ='gray';
    card.style.color='white';
    card.style.padding='20px';
    card.style.margin='2px';
    card.style.display='inline-block';

    image.style.width='100%';



    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(image);
    container.appendChild(card);


}
// the for loop
for(let i=0 ; i<4 ; i++) {
    element(name[i], ages[i]);



}





