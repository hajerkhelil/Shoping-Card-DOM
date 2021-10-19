
      var plus = document.querySelectorAll(".plus-btn");
      var minus = document.querySelectorAll(".minus-btn");

      for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener("click", function () {
          plus[i].nextElementSibling.innerHTML++;
          Total();
        });
      }

      for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener("click", function () {
          if (minus[i].previousElementSibling.innerHTML > 0) {
            minus[i].previousElementSibling.innerHTML--;
            Total();
          }
        });
      }

      var remove_btn = document.getElementsByClassName("removeBtn");

      for (let i = 0; i < remove_btn.length; i++) {
        remove_btn[i].addEventListener("click", function () {
          remove_btn[i].parentElement.remove();
          Total();
        });
      }

      var like_btn = document.querySelectorAll(".likeBtn");

      for (let i = 0; i < like_btn.length; i++) {
        like_btn[i].addEventListener("click", function () {
          like_btn[i].classList.toggle("red");
        });
      }

      // Total:

      function Total() {
        var priceElement = document.getElementsByClassName("shop-price");
        var quantityElement = document.getElementsByClassName("count");
        var totalprice = document.querySelector(".total-price");
        var sum = 0;
        for (let i = 0; i<quantityElement.length; i++) {
          sum +=
            parseInt(priceElement[i].innerText) *
            parseInt(quantityElement[i].innerText);
        }
        totalprice.innerHTML= sum;
        console.log(sum);
      }