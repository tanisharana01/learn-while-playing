let questions = [
{q:"Apple is?", options:["Fruit","Car","Animal"], answer:"Fruit"},
{q:"Dog is?", options:["Animal","Fruit","Vehicle"], answer:"Animal"},
{q:"Sun is?", options:["Star","Fruit","Animal"], answer:"Star"},
{q:"Car is a?", options:["Vehicle","Animal","Fruit"], answer:"Vehicle"},
{q:"Lion is?", options:["Animal","Bird","Fish"], answer:"Animal"},
{q:"Grapes are?", options:["Fruit","Vegetable","Drink"], answer:"Fruit"},
{q:"Cat is?", options:["Animal","Vehicle","Fruit"], answer:"Animal"},
{q:"Water is?", options:["Liquid","Solid","Gas"], answer:"Liquid"},
{q:"Earth is?", options:["Planet","Star","Moon"], answer:"Planet"},
{q:"Fish lives in?", options:["Water","Air","Land"], answer:"Water"},
{q:"Tree gives us?", options:["Oxygen","Water","Fire"], answer:"Oxygen"},
{q:"Milk comes from?", options:["Cow","Car","Tree"], answer:"Cow"},
{q:"Bird can?", options:["Fly","Swim","Drive"], answer:"Fly"},
{q:"Ice is?", options:["Solid","Liquid","Gas"], answer:"Solid"},
{q:"Fire is?", options:["Hot","Cold","Wet"], answer:"Hot"},
{q:"Moon is?", options:["Satellite","Planet","Star"], answer:"Satellite"},
{q:"Banana is?", options:["Fruit","Animal","Vehicle"], answer:"Fruit"},
{q:"Air is?", options:["Gas","Liquid","Solid"], answer:"Gas"},
{q:"Teacher works in?", options:["School","Hospital","Bank"], answer:"School"},
{q:"Doctor works in?", options:["Hospital","School","Office"], answer:"Hospital"}
];


let index = 0;
let score = 0;

function loadQuestion(){
let q = questions[index];
let box = document.getElementById("quizBox");

if(!box) return;

box.innerHTML = `<h3>${q.q}</h3><p id="result"></p>`;

q.options.forEach(opt=>{
let btn = document.createElement("button");
btn.innerText = opt;

btn.onclick = ()=>{
let result = document.getElementById("result");

if(opt === q.answer){
result.innerText = "✅ Correct!";
result.style.color = "green";

score++;
document.getElementById("score").innerText = score;


fetch("/score",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({score:score})
});

}else{
result.innerText = "❌ Wrong!";
result.style.color = "red";
}
};

box.appendChild(btn);
});
}

function nextQuestion(){
index++;

if(index < questions.length){
loadQuestion();
}else{
alert("Quiz Finished 🎉");
}
}


loadQuestion();

btn.onclick = ()=>{
let result = document.getElementById("result");

let buttons = document.querySelectorAll("#quizBox button");

buttons.forEach(b => b.disabled = true);

if(opt === q.answer){
result.innerText = "✅ Correct!";
btn.style.background = "green";
}else{
result.innerText = "❌ Wrong!";
btn.style.background = "red";
}
};




function showDetail(item){

let title = document.getElementById("title");
let content = document.getElementById("content");
let box = document.getElementById("detailBox");

box.style.display = "block";


let data = {

apple:{
title:"🍎 Apple",
text:`Apple is one of the most popular fruits in the world. It is rich in vitamins, minerals, and fiber which help keep the body healthy.

Apples come in different colors like red, green, and yellow. They grow on trees and are mostly found in cold regions such as Himachal Pradesh.

Eating apples daily helps in improving digestion. It is also good for the heart and helps control weight.

Apples contain antioxidants which protect the body from diseases. They also improve brain health.

Apples are used in making juice, jam, jelly, and desserts. They are sweet, juicy, and loved by children.

Doctors often say “An apple a day keeps the doctor away”.

Overall, apple is a very healthy and important fruit for everyone.`
},

dog:{
title:"🐶 Dog",
text:`Dog is a domestic animal and one of the most loyal animals. It is known as man's best friend.

Dogs guard our homes and protect us from danger. They are very intelligent and can be trained easily.

There are many breeds of dogs like Labrador, German Shepherd, and Pug.

Dogs help police in catching criminals. They also help blind people as guide dogs.

Dogs love to play and need proper care, food, and exercise.

They are very friendly and bring happiness to families.

Overall, dogs are loyal, helpful, and loving animals.`
},

lion:{
title:"🦁 Lion",
text:`Lion is known as the king of the jungle. It is a strong and powerful animal.

Lions live in groups called prides. They are carnivores and hunt animals for food.

Male lions have a thick mane which makes them look majestic.

They are found mainly in Africa and some parts of Asia.

Lions are very brave and protect their group.

They are fast runners and skilled hunters.

Overall, lions are powerful and majestic animals.`
},

sun:{
title:"☀️ Sun",
text:`The Sun is a star and the center of our solar system. It provides light and heat to Earth.

Without the Sun, life on Earth would not exist.

Plants use sunlight to prepare food through photosynthesis.

The Sun rises in the east and sets in the west.

It gives us energy and helps in maintaining climate.

Too much exposure to sunlight can be harmful.

Overall, the Sun is very important for life.`
},

car:{
title:"🚗 Car",
text:`Car is a vehicle used for transportation. It makes travel easy and comfortable.

Cars run on petrol, diesel, or electricity.

There are many types of cars like SUV, sedan, and electric cars.

Cars save time and help in long journeys.

They require fuel and regular maintenance.

Traffic rules must be followed while driving.

Overall, cars are very useful in daily life.`
},

cat:{
title:"🐱 Cat",
text:`Cat is a small domestic animal. It is soft and playful.

Cats love milk and fish. They are kept as pets in many homes.

They are independent and can take care of themselves.

Cats have sharp claws and can climb trees.

They are very clean animals.

Overall, cats are cute and friendly pets.`
},

elephant:{
title:"🐘 Elephant",
text:`Elephant is the largest land animal. It has a long trunk and big ears.

It is very strong but also gentle in nature.

Elephants eat grass, fruits, and leaves.

They live in forests and grasslands.

Elephants are intelligent animals.

Overall, elephants are powerful and kind animals.`
},

fish:{
title:"🐟 Fish",
text:`Fish are animals that live in water. They have fins and gills.

Fish breathe through gills and swim using fins.

They are an important source of food.

Fish are found in rivers, lakes, and oceans.

Some fish are colorful and beautiful.

Overall, fish are important aquatic animals.`
},

grapes:{
title:"🍇 Grapes",
text:`Grapes are small and juicy fruits. They grow in bunches.

They are sweet and come in green, red, and black colors.

Grapes are used to make juice and wine.

They are rich in vitamins and good for health.

Overall, grapes are tasty and healthy fruits.`
},

house:{
title:"🏠 House",
text:`House is a place where people live. It provides shelter.

It protects us from rain, heat, and cold.

Houses can be big or small.

They have rooms like bedroom, kitchen, and hall.

Overall, house is an important part of life.`
},

icecream:{
title:"🍦 Ice Cream",
text:`Ice cream is a frozen sweet dessert. It is loved by children.

It comes in many flavors like chocolate, vanilla, and strawberry.

Ice cream is cold and refreshing.

Overall, ice cream is a delicious treat.`
},

kite:{
title:"🪁 Kite",
text:`Kite is a flying toy. It flies in the sky with the help of wind.

People enjoy flying kites during festivals.

Kites are colorful and fun.

Overall, kite flying is an enjoyable activity.`
},

monkey:{
title:"🐵 Monkey",
text:`Monkey is a playful animal. It lives on trees.

Monkeys eat fruits and bananas.

They are very active and intelligent.

Overall, monkeys are fun-loving animals.`
},

nest:{
title:"🪺 Nest",
text:`Nest is the home of birds. Birds build nests to live safely.

They use twigs, leaves, and grass.

Nests protect eggs and baby birds.

Overall, nests are important for birds.`
},

orange:{
title:"🍊 Orange",
text:`Orange is a citrus fruit. It is rich in vitamin C.

It is juicy and sweet-sour in taste.

Oranges help boost immunity.

Overall, oranges are healthy fruits.`
},

parrot:{
title:"🦜 Parrot",
text:`Parrot is a colorful bird. It can mimic human voice.

It eats fruits and seeds.

Parrots are intelligent birds.

Overall, parrots are beautiful birds.`
},

queen:{
title:"👑 Queen",
text:`Queen is a female ruler. She leads a kingdom.

She makes important decisions.

Overall, queen represents power and leadership.`
},

rabbit:{
title:"🐰 Rabbit",
text:`Rabbit is a small animal. It has long ears.

It eats carrots and vegetables.

Rabbits are very fast.

Overall, rabbits are cute animals.`
},

tiger:{
title:"🐯 Tiger",
text:`Tiger is a strong wild animal. It has black stripes.

It is a powerful hunter.

Tigers live in forests.

Overall, tigers are dangerous but beautiful animals.`
},

tree:{
title:"🌳 Tree",
text:`Trees are very important for life. They give us oxygen.

They provide fruits, shade, and wood.

Trees help keep the environment clean.

Overall, trees are essential for life.`
}

};

title.innerText = data[item].title;
content.innerText = data[item].text;
}

function closeDetail(){
let box = document.getElementById("detailBox");

box.style.display = "none";
}



btn.onclick = ()=>{
let buttons = document.querySelectorAll("#quizBox button");

buttons.forEach(b => b.disabled = true);

if(opt === q.answer){
btn.style.background = "green";
btn.style.boxShadow = "0 0 15px green";
}else{
btn.style.background = "red";
}
};