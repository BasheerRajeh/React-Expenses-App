import moment from "moment";

function useFormatter(locale = "en-US") {
    const currencyFormatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
    });

    function formatCurrency(amount) {
        return currencyFormatter.format(amount);
    }

    function formatDate(date) {
        const [monthName, year, day] = moment(date)
            .format("MMM YYYY DD")
            .split(" ");
        return [monthName, year, day];
    }

    return { formatCurrency, formatDate };
}

export default useFormatter;
