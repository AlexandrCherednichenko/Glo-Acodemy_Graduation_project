const popupMenu = () => {

   const callbackBtn = document.querySelectorAll('.callback-btn');
   const modalCallback = document.querySelector('.modal-callback');
   const modalOverlay = document.querySelector('.modal-overlay');
   const modalClose = document.querySelector('.modal-close img');

   const openToggle = () => {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
      // let start = Date.now();
      // let timer = setInterval(() => {
      //    let timePassed = Date.now() - start;
      //    modalCallback.style.top = timePassed / 2 + 'px';
      //    if (timePassed > 500) clearInterval(timer);
      // }, 1.5);
   };
   const closeToggle = () => {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
   };

   callbackBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
         openToggle();
      });
   });

   document.addEventListener('click', (event) => {
      if (event.target === modalClose){
         closeToggle();
      } else if(event.target === modalOverlay){
         closeToggle();
      }
   });

};

export default popupMenu;