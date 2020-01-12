<template>
  <div class="wapper__product">
    <div class="product__img">
      <div class="container__img">
        <img
          src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="wapper__product__info">
      <h2 class="product__info__title">Calabresa a moda da casa</h2>
      <h4 class="product__info__sub_title">
        Um delicioso e saboroso com tudo feito na hora
      </h4>
      <p class="product__info__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
        mollitia, omnis cum dolor impedit facilis ipsum inventore, recusandae,
        laudantium nobis quos rem fuga quasi!
      </p>
      <div class="wapper__price">
      <div class="wapper__btn">
        <button class="less"> - </button>
        <span class="value">1</span>
        <button class="more"> + </button>
      </div>
      <span class='price'>
        <span class="price__label">
          Preço:
        </span>
        <span class="price__value">
          R$15
        </span>
      </span>
      </div>
      <button class="btn__addcart">Adicionar no carrinho</button> 
    </div>
    <!-- https://dribbble.com/shots/5059613-Web-Food-Delivery-Platform-Food-Search/attachments -->
  </div>
</template>
<script>
export default {
  name: "ProductComponent"
};
</script>
<style lang="stylus">
font-color = #3b3a55;
b-width = 100%;
font = 'Roboto', sans-serif;
.wapper__product{
  width: b-width;
  height 100vh;
  padding: 20px;
  display: flex;
  background: #fcfbfe;
  justify-content: space-between;
  .product__img {
    width: b-width;
    display flex;
    justify-content: center;
    .container__img {
      width: 75%;
      img {
        width: b-width;
        max-width: 100%;
        border: none;
        border-radius: 4px;
      }
    }
  }
  .wapper__product__info {
    display: flex;
    flex-direction : column;
    padding-right : 20px;
      .product__info__title {
      display : flex;
      font-size: 2.3rem;
      line-height 16px;
      font-weight: 700;
      color: font-color;
     }
    .product__info__sub_title{
      color: font-color;
      line-height 16px;
      font-font-weight :100;
    }
    .product__info__description {
      font-size: .75rem;
       width: 73%;
      font-family: font;
      color: font-color;
    }
    & > .btn__addcart {
      font-family: font;
      cursor: pointer;
      text-transform : uppercase;
      color: #fff;
      width: 330px;
      margin-top : 40px;
      padding : 15px 15px;
      border-radius: 20px;
      border : none;
      background-image: linear-gradient(-90deg, #e03c72, #6B70C8);
    }
  }
  .wapper__price {
    display : flex;
    align-items : baseline;
    align-content : center;
    & > .price {
      font-family : font;
      color: font-color;
      padding: 11px 20px 11px 20px;
      border-radius: 20px
      box-shadow: 0 0 9px 3px rgba(107, 112, 200, .2);
      & > .price__value {
        color : #e03c72;
      }
    }
  }
  .wapper__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 40px;
  margin-top : 40px;
  margin-right :40px;
  border-radius: 20px;
  box-shadow: 0 0 9px 3px rgba(107, 112, 200, .2)

  &  > .less {
    color: font-color;
    background: #fff;
    font-size: 1rem;
    border: none;
    padding: 11px 20px 11px 20px;
    border-radius : 20px 0 0 20px;
    
  }
  & > .value {
    display: flex;
    justify-content : center;
    align-items : center;
    text-align: center;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  & > .more {
    border-radius : 0 20px 20px 0;
    padding : 11px 20px 11px 20px;
    border: none;
    font-size: 1rem;
    background: #fff;
  } 
  }
}
</style>
