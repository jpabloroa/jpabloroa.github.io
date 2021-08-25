/**
 * 
 */
function backgroundImage() { return "https://drive.google.com/uc?export=view&id=" + "1LodwnSdKcVycb779DzhO0HgI1ekRhaL9"; };
function headerImage_1() { return "https://drive.google.com/uc?export=view&id=" + "12g9vMNuIGsCFnAfOgdgUJnlCMDQkK4VG"; };
function headerImage_2() { return "https://drive.google.com/uc?export=view&id=" + "1EXU5SBGFoDdh-JvKnHRY_ppf6Z9DKtFR"; };
function linkImage_AptoModelo() { return "https://drive.google.com/uc?export=view&id=" + "1IweHRIDWlQFN-XRAo_dfNN9sa1m2cRMC"; };
function linkImage_Contacto_WhatsApp() { return "https://drive.google.com/uc?export=view&id=" + "1zILgNv5NNVJ6eQODq4H9EzpoW7XhuD9t"; };
function linkImage_Galeria() { return "https://drive.google.com/uc?export=view&id=" + "1-JRmpdEgyDrgbEjJ0lnqESR6JOJC93lr"; };
function linkImage_4() { return "https://drive.google.com/uc?export=view&id=" + "data/Gimnasio-Panoramica.jpg"; };

/**
* Método que inicia el Landing
*/
function initComponents() {

    /*const queryParams = window.location.search;
 
    const urlParams = new URLSearchParams(queryParams);
 
    //alert(urlParams.get("loc") + " -> " + urlParams.get("session"));
 
    /**
     * Initialice DOM configurations
     */
    setDOMComponents(backgroundImage());

    /**
     * Insert components
     */
    // Header
    document.getElementById("header-container").innerHTML += html_newHeader({ cssClass: "header", title: "Mazurén 2", subtitle: "Conjunto Residencial", imgSource1: headerImage_1(), imgSource2: headerImage_2(), href: "http://www.youtube.com" });
    // Links
    document.getElementById("link-container").innerHTML += html_newLink({ element: "link_AptoModelo", cssClass: "link", title: "Conozca el Apartamento Modelo", imgSource: linkImage_AptoModelo(), href: "https://cusezar.com/recorridos/oporto-80m/17-09-18-oporto-80m2/gran-reserva-de-oporto-salitre-80m2.html" });
    document.getElementById("link-container").innerHTML += html_newLink({ element: "link_Contacto_WhatsApp", cssClass: "link", title: "¡ Me interesa !", imgSource: linkImage_Contacto_WhatsApp(), href: "http://wa.me/3124020472?text=Hola,%20me%20interesa%20el%20proyecto" });
    document.getElementById("link-container").innerHTML += html_newLink({ element: "link_Galeria", cssClass: "link", title: "Galería de imágenes", imgSource: linkImage_Galeria(), href: "http://www.youtube.com" });
}

/**
 * Este método inicializa la estructura básica del DOM.
 * 
 * @param {string} backGround - Imagen de fondo.
 */
function setDOMComponents(backGround) {/* Initial DOM configurations */ document.getElementsByTagName('body').style = "width: 100%;height: 100%;"; /* Main Containers */ document.getElementById("main").innerHTML += html_addComponent({ element: "img", id: "background-image", cssClass: "background-image", complement: "src='" + backGround + "'" }); document.getElementById("main").innerHTML += html_addComponent({ element: "div", id: "container", cssClass: "container", complement: "" }); /* Header Container */ document.getElementById("container").innerHTML += html_addComponent({ element: "div", id: "header-container", cssClass: "header-container", complement: "" }); /* Link Container */ document.getElementById("container").innerHTML += html_addComponent({ element: "div", id: "link-container", cssClass: "link-container", complement: "" }); /* Footer */ document.getElementById("container").innerHTML += html_newFooter({ cssClass: "footer", imgSource: "data/LOGO ROVERIN.png", href: "https://jpabloroa.github.io/" }); }

/**
 * Este método genera el componenete especificado.
 * 
 * @param {Object} Object - Objecto con los parámetros del contenedor.
 * @param {string} Object.element - Nombre del elemento.
 * @param {string} Object.id - Identifdicador del elemento.
 * @param {string} Object.cssClass - Clase de estilos Css.
 * @param {string} Object.complement - Complemento a la descripción del elemento.
 * @param {string} Object.value - Valor del elemento.
 */
function html_addComponent(Object) { if (Object.value == null) { Object.value = "" } return "<" + Object.element + " id='" + Object.id + "' class='" + Object.cssClass + "' " + Object.complement + " >" + Object.value + "</" + Object.element + ">"; }

/**
 * Este método genera un componenete 'Header'.
 * 
 * @param {Object} Object - Objecto con los parámetros del contenedor.
 * @param {string} Object.cssClass - Clase de estilos Css.
 * @param {string} Object.title - Nombre de la Unidad Residencial.
 * @param {string} Object.subtitle - Tipo de Unidad Residencial.
 * @param {string} Object.imgSource1 - Imagen Acceso (Portería) - Izquierda.
 * @param {string} Object.imgSource2 - Imagen Zona Social - Derecha.
 * @param {string} Object.href - Link.
 */
function html_newHeader(Object) { var cssClass = Object.cssClass, title = Object.title, subtitle = Object.subtitle, imgSource1 = Object.imgSource1, imgSource2 = Object.imgSource2; return "<div id='header' class='" + cssClass + "'>" + "<a id='header' class='" + cssClass + "-link' href='" + Object.href + "'>" + "<img id='header-main-photo' class='" + cssClass + "-main-photo' src='" + imgSource1 + "'>" + "<img id='header-upper-photo' class='" + cssClass + "-upper-photo' src='" + imgSource2 + "'>" + "<h1 id='header-subtitle' class='" + cssClass + "-subtitle'>" + subtitle + "</h1>" + "<h1 id='header-title' class='" + cssClass + "-title'>" + title + "</h1>" + "</a></div>"; }

/**
 * Este método genera un componenete 'Link'.
 * 
 * @param {Object} Object - Objecto con los parámetros del contenedor.
 * @param {String} Object.element - Nombre del contenedor (Link).
 * @param {string} Object.cssClass - Clase de estilos Css.
 * @param {string} Object.title - Título del Link.
 * @param {string} Object.imgSource - Imagen del contenedor - Izquierda.
 * @param {string} Object.href - Link.
 */
function html_newLink(Object) { var value = Object.element, cssClass = Object.cssClass, title = Object.title, imgSource = Object.imgSource; return "<a id='" + value + "' class='" + cssClass + "-link' href='" + Object.href + "'>" + "<div id='" + value + "' class='" + cssClass + "'>" + "<img id='" + value + "-main-photo' class='" + cssClass + "-main-photo' src='" + imgSource + "'>" + "<h1 id='" + value + "-title' class='" + cssClass + "-title'>" + title + "</h1>" + "</div></a>"; }

/**
 * Este método genera un componenete 'Footer'.
 * 
 * @param {Object} Object - Objecto con los parámetros del contenedor.
 * @param {string} Object.cssClass - Clase de estilos Css.
 * @param {string} Object.imgSource - Imagen del contenedor (Logo).
 * @param {string} Object.href - Link.
 */
function html_newFooter(Object) { var cssClass = Object.cssClass, imgSource = Object.imgSource; return "<div id='footer' class='" + cssClass + "'>" + "<a id='footer' class='" + cssClass + "-link' href='" + Object.href + "'>" + "<img id='footer-main-photo' class='" + cssClass + "-main-photo' src='" + imgSource + "'>" + "</a></div>"; }