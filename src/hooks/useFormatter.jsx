function useFormatter(locale = "en-US") {
    const currencyFormatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
    });
    const dateFormatter = new Intl.DateTimeFormat(locale, {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    function formatCurrency(amount) {
        return currencyFormatter.format(amount);
    }

    function formatDate(date) {
        const [monthName, day, year] = dateFormatter
            .format(new Date(date))
            .split(" ");
        return [monthName, parseInt(year), parseInt(day.slice(0, -1))];
    }

    return { formatCurrency, formatDate };
}

export default useFormatter;
