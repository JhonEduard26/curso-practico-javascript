const coupons = ['cyberlunes', 'blackfriday', 'hotdays']

const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
  return precioConDescuento
}

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById('input-price')
  const priceValue = inputPrice.value

  const inputCoupon = document.getElementById('input-coupon')
  const couponValue = inputCoupon.value

  let discount

  switch (couponValue) {
    case 'cyberlunes':
      discount = 10
      break
    case 'blackfriday':
      discount = 20
      break
    case 'hotdays':
      discount = 30
      break
    default:
      discount = 0
      break
  }

  const priceWithDiscount = calcularPrecioConDescuento(priceValue, discount)

  const resultP = document.getElementById('resultP')
  resultP.innerText = 'El precio con descuento son: $' + priceWithDiscount
}
