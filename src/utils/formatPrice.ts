export function formatPrice(price: number) {
  return Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
