let names = ['D:ahmed', 'D:ali', 'D:mohamed', 'D:gamal', 'D:hanin', 'D:ahmed'];
let ages = ['18 years old', '19 years old', '20 years old', '21 years old', '22 years old', '23 years old'];

let container = document.createElement('div');
document.body.appendChild(container);

container.style.textAlign = 'center';
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';

function element(nameText, ageText, parent) {
    // عناصر الكارت
    let card = document.createElement('div');
    let name = document.createElement('h3');
    let age = document.createElement('p');
    let img = document.createElement('img');

    // المحتوى
    name.textContent = nameText;
    age.textContent = ageText;
    img.src = 'img/doctor.png';

    // إضافة العناصر للكارت
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(img);
    parent.appendChild(card);

    // تنسيق الكارت
    card.style.width = '200px';
    card.style.background = '#444';
    card.style.padding = '10px';
    card.style.margin = '10px';
    card.style.display = 'inline-block';
    card.style.color = '#fff';
    card.style.borderRadius = '8px';

    img.style.width = '100px';
    img.style.borderRadius = '50%';
}

// عرض الكروت بحيث كل 3 كروت في صف
for (let i = 0; i < names.length; i++) {
    // عند كل 3 كروت، نبدأ صف جديد
    if (i % 3 === 0) {
        var row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        container.appendChild(row);
    }
    element(names[i], ages[i], row);
}
