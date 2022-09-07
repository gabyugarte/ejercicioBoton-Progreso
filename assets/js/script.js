// Vamos a calcular el valor del scroll para saber cuando debe aparecer la flecha
let calcScrollValue = () => {
        //guardamos los valoren en variables
        let scrollProgress = document.getElementById("progress");
        let progressValue = document.getElementById("progress-value");
        let progressNextValue = document.getElementById("progress-nextValue");
        
        //usamos la propiedad scrollTop para medir de la distancia desde el límite superior de un elemento al límite superior de su contenido visible
        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = Math.max(document.documentElement.clientHeight);
        // console.log(clientHeight);
        //Calculamos la altura, El valor scrollHeight es igual a la altura mínima (donde la altura incluye el relleno , pero no incluye bordes y márgenes) 
        // la propiedad clientHeight calcula la altura de solo lo visible, incluyendo el padding.
        let calcHeight =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        // valor del scroll, usamos el método Math.round para redondear y sacamos el porcentaje con respecto al scroll y la altura.
        let scrollValue = Math.round((scrollTop * 100) / calcHeight);
        if (scrollTop < 10) {
          scrollProgress.style.display = "none";
        } else if(scrollTop > 10 && scrollTop < clientHeight) {
          scrollProgress.style.display = "grid";
          progressNextValue.style.display = "none";
          progressValue.style.display = "grid"; 
        } else{
          progressNextValue.style.display = "grid";
          progressValue.style.display = "none"; 
        }
      
        scrollProgress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#b803cc ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
      };
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;