import Script from 'next/script'

const defaultStyle = `w-full mb-xl`

const BtcPayment = ({ icon = '', name = '', url }: { icon: string; name: string; url: string }) => {
  return (
    <div className={defaultStyle}>
      <lightning-widget name={`${icon} ${name}`} accent="#f7931a" to="macjjuni@strike.me" image={url} amounts="1000, 6000, 10000" labels="🏃🏻‍♂️, ☕️, 💻, ⭐️" />
      <Script src="https://embed.twentyuno.net/js/app.js" />
    </div>
  )
}

export default BtcPayment
