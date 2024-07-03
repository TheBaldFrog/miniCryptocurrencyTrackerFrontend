import {Card} from "antd";

function get_percentChange(percentChange24h) {
    if (percentChange24h < 0) {
        return <span className="text-red-600">{percentChange24h}%</span>
    } else {
        return <span className="text-green-600">{percentChange24h}%</span>
    }
}

function get_price(price) {
    if (price.toFixed(2) <= 0) {
        return price.toFixed(5)
    }
    else {
        return price.toFixed(2);
    }
}

function CryptocurrencyCard(props) {
    const {currency} = props

    const price = currency.quote.USD.price
    const totalSupply = Math.round(currency.total_supply / 1000000)
    const percentChange24h = currency.quote.USD.percent_change_24h.toFixed(3)
    const percentChange1M = currency.quote.USD.percent_change_30d.toFixed(3)


    return (
        <div>
            <Card
                title={
                    <div className="flex items-center gap-3 box-content">
                        <img className="max-w-11        "
                             src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}
                             alt="missing"/>
                        <span>{currency.name}</span>
                    </div>
                }
                // extra={<a href="#">More</a>}
                style={{
                    width: 300,
                }}
            >
                <p>Popularity: {"#"}{currency.cmc_rank}</p>
                <p>Current price: {get_price(price)}{"$"}</p>
                <p>Price change 24h: {get_percentChange(percentChange24h)}</p>
                <p>Price change 1 Month: {get_percentChange(percentChange1M)}</p>
                <p>Total supply: {totalSupply}{"M"}</p>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard