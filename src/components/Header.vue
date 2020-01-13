<template>
    <nav class='nav__container'>
      <div class="brand">
        <a href=''>Food Delivery</a>
      </div>
      <div class="search">
        <div class="address">
          <span class="address__label">
            Minha localização: 
          </span>
          <span class="address__info">
            Rua da consolação, 75 - centro
          </span>
        </div>
        <div class="input">
          <input type="text" placeholder="O que você quer comprar ?">
        </div>
     </div>
      <div class="cart">
          <div class="order__info">
            <span>
              3 pratos
            </span>
            <span>
              R$ 60
            </span>
            <span>
              carrinho
            </span>
          </div>
          <button class="btn__order">Compras</button>
      </div>
    </nav>    
</template>
<script>
export default {
  name: 'header-component'
}
</script>
<style lang="stylus">
font-color = #3b3a55;
b-width = 100%;
font = 'Roboto', sans-serif;
.nav__container {
  width: 100%;
  max-width : 1320px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
  background : #fff;
  display : flex;
  justify-content : space-around;
  align-items : center;
  & > .brand {
    width: 60%;
    & > a {
        font-size: 1rem;
        text-decoration: none;
        cursor pointer;
        font-family:font
    }
  }
  & > .search {
    width: 100%;
    display: flex;
    flex-direction : column;
    & > .address {
      width : 100%;
      & > .address__label {
        color : rgba(107, 112, 200, .8);
        font-size : .65em;
      }
      & > .address__info {
        font-family :font;
        font-size : .65em;
        font-weight :bold
        letter-spacing : .3px;
        color:font-color;
        padding-left : 10px;
        margin-bottom : 15px;
      }
    }
    & > .input {
        width : 100%;
      & > input {
        width: 450px;
        height: 30px;
        border-radius: 10px;
        border :none;
        box-shadow: 0 0 9px 3px rgba(107, 112, 200, .2);
      }
      & > input::placeholder {
        padding-left: 15px;
      }
    } 
  }
  & > .cart {
    width: 60%;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    border : none;
    padding-bottom : 20px;
    paddin-right : 30px;
    border-radius: 10px;
    box-shadow: 0 0 9px 3px rgba(107, 112, 200, .2);

    & > .order__info {
      width : 100%;
      display : flex;
      background : font-color;
      justify-content: space-between;
      // padding: 10px;
      // margin-bottom : 10px;
      & > span {
        color : #fff
        font-family: font;
        padding: 10px;
      & > span::first-child {
        padding-left : 10px
      }
      }
    }
    & > .btn__order {
      font-family: font;
      cursor: pointer;
      text-transform : uppercase;
      color: #fff;
      margin-top: 10px;
      margim-bottom : 10px;
      width: 230px;
      padding : 15px 15px;
      border-radius: 20px;
      border : none;
      background-image: linear-gradient(-90deg, #e03c72, #6B70C8);
    }
  }
}
</style>