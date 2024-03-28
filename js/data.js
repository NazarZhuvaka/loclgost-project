//  // Оголошуємо дані для карти прямо тут
//  const cardData = [
//     {
//       imageUrl: './img/bringwoods.png',
//     title: 'Brightwoods Cabin',
//     description: 'Bridlepath, Ontario, Canada',
//     titleClass: 'custom-title-class', // Додайте клас для заголовка
//   imageClass: 'custom-image-class' // Додайте клас для зображення
    
//   },
//   {
//     imageUrl: './img/bringwoods.png',
//       title: 'Brightwoods Cabin',
//       description: 'Bridlepath, Ontario, Canada',
      
//   },
//   {
//     imageUrl: './img/bringwoods.png',
//     title: 'Brightwoods Cabin',
//     description: 'Bridlepath, Ontario, Canada',
    
//   },
//   {
//     imageUrl: './img/bringwoods.png',
//       title: 'Brightwoods Cabin',
//       description: 'Bridlepath, Ontario, Canada',
      
//   },
//       // Додайте інші об'єкти, які представляють ваші карти
//     ];

//     // Отримайте посилання на контейнер, куди ви будете вставляти карти
//     const cardsContainer = document.getElementById('cards-container');

//     // Пройдіться по масиву cardData і створіть карти для кожного об'єкта
//     cardData.forEach(card => {
//       // Додайте зображення карти
//       const imageElement = document.createElement('img');
//       imageElement.src = card.imageUrl;
//       imageElement.classList.add(card.imageClass);
//       // Створіть елемент карти
//       const cardElement = document.createElement('div');
//       cardElement.classList.add('card');

//       // Додайте заголовок карти
//       const titleElement = document.createElement('h2');
//       titleElement.textContent = card.title;
//       titleElement.classList.add(card.titleClass); // Додайте клас з об'єкта cardData

//       // Додайте опис карти
//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = card.description;

      

//       // Додайте всі створені елементи до карти
//       cardElement.appendChild(imageElement);
//       cardElement.appendChild(titleElement);
//       cardElement.appendChild(descriptionElement);
      

//       // Додайте карту до контейнера
//       cardsContainer.appendChild(cardElement);
//     });