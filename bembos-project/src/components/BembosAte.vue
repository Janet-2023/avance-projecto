
<template>
   <div class="pagina-content">
      <div class="container-max">
        <div class="pagina-principal">
            <div class="pagina-menu">
                <div class="nav-menu">
                <ul class="item-list">
                    <li class="item-lis"><a href="">Lima</a></li>
                    <li class="item-lis"><a href="">Arequipa</a></li>
                    <li class="item-lis"><a href="">Callao</a></li>
                    <li class="item-lis"><a href="">Chiclayo</a></li>
                    <li class="item-lis"><a href="">Cusco</a></li>
                    <li class="item-lis"><a href="">Huancayo</a></li>
                    <li class="item-lis"><a href="">Huanuco</a></li>
                    <li class="item-lis"><a href="">Ica</a></li>
                    <li class="item-lis"><a href="">Juliaca</a></li>
                    <li class="item-lis"><a href="">Pucallpa</a></li>
                    <li class="item-lis"><a href="">Puno</a></li>
                    <li class="item-lis"><a href="">Tacna</a></li>
                    <li class="item-lis"><a href="">Trujillo</a></li>
                </ul>
                </div> 
            </div>
            <div class="pagina-title">
                <h1>DELIVERY DE HAMBURGUESAS EN BEMBOS ATE</h1>
            </div>
            <div class="pagina-body">
                <div class="content">
                    <div class="title-body">
                        <h1>BEMBOS ATE</h1>
                    </div>
                    <div class="body-main">
                        <h2>Encuentra toda la información de los locales de
                            Bembos Ate y disfruta de nuestras riquísimas hamburguesas a la parrilla 100% peruanas.</h2>
                        <div>
                           <div class="lista-add">
                              <div class="address">
                                 <img src="../assets/images/location.png" alt="">
                                 <a href="">Plaza Vea Ate</a>
                                 <p>Av. Nicolas Ayllon Sector B. Mz B, Lte 4, Zona A - Baja (cruce con Av. La Mar)  - Tienda 7</p>
                                 <p>Teléfono: -</p>                                  
                              </div>
                              <div class="address">
                                 <img src="../assets/images/location.png" alt="">
                                 <a href="">Santa Clara</a>
                                 <P>Local Comercial 132, 2do. Piso - Av. Nicolas Ayllon 8694</P>
                                 <p>Teléfono: -</p>
                              </div>
                              <div class="address">  
                                 <img src="./images/location.png" alt="">
                                 <a href="">Real Plaza Puruchuco</a>
                                 <p>Local Comercial 132, Av. Nicolás Ayllón
                                 </p>
                                 <p>Teléfono: -</p>
                              </div> 
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
   </div>

</template>

<style>
*{
    padding: 0%;
    margin: 0%;
}
.container-max {
    max-width: 1134px;
    width: 100%;
    margin: auto;
}

.nav-menu .item-list{
    list-style: none;
    text-align: left;
    padding: 0;
    margin: 40px 0 0;

}

.nav-menu .item-list .item-lis{
    display: inline-flex;
    margin: 0 5px 20px;
}
.nav-menu  a{

    text-decoration: none;
    padding: 10px 20px;
    font-size: 19px;
    color: #173083;
    border: 1px solid #173083;
    border-radius: 20px;
    cursor: pointer;
    width: 100%;

}

.pagina-principal .pagina-title{
    background: #21388b;
    color: #ffb500;
    border-radius: 9px 9px 0 0;
    text-align: center;
    padding: 10px 15px;

}

.pagina-principal .pagina-body{
    max-width: 814px;
    margin: auto;
    font-family: Kulturista,sans-serif;
}

.pagina-principal .pagina-body .content .title-body h1{
    background: #ffb500;
    color: #21388b;
    text-align: center;
    padding: 10px 15px;
    margin: 40px auto 10px;
    border-radius: 9px;

}
.pagina-principal .pagina-body .content .title-body h1{
    font-weight: 700;
    font-size: 15px;
}


.pagina-principal .pagina-body .content  h2{
    font-family: Arial,Helvetica,sans-serif;
    margin: 20px auto;
    font-size: 15px;
    font-weight: 400;
}

.lista-add{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

}

.address {
    margin: 0 0 20px;
    border-radius: 9px;
    border: 1px solid #21388b;
    padding: 30px;
}

.address a{
    text-decoration: none;
    color: #21388b;

}
.lista-add .address{
    width: 41%;
}
p{ 
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

img{
    width: 5%;
}


@media (max-width: 1023px) {
    .nav-menu .item-list{
        grid-gap: .5rem;
        gap: .5rem;        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }   
}

@media(max-width: 1004px){ 

    .nav-menu .item-list{
        padding-bottom: 10px;
    }

    .nav-menu .item-list .item-lis{
        margin: 0;
    }
}



@media(max-width: 868px){ 
    .list-add{
        display: grid;
        grid-template-columns: repeat(1, 1fr);

    }
    .address{
        margin: 5px auto;

    }
    .lista-add .address{
        width: 100%;
    }
}
@media(max-width: 600px){

    .pagina-content{
        padding-top: 123px;
    }
} 


</style>