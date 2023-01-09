if (document.querySelectorAll('.accordion-link')) { 
    const accordionLinks = document.querySelectorAll('.accordion-link');
  
    accordionLinks.forEach(function(accordionLink) {
      accordionLink.addEventListener('click', function() {
        let accordionItem = this.closest('.accordion-item');
        accordionItem.classList.toggle('open');
      });
    });
  }