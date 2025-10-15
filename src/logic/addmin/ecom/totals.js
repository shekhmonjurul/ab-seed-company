export default function totals(formData) {

    return [
        {
            label: "Discount",
            field: "discount",
            value: formData.discount,
            type: "number",
        },
        {
            label: "Advance",
            field: "advance",
            value: formData.advance,
            type: "number",
        },
        {
            label: "Sub Total",
            field: "subtotal",
            value: formData.subtotal,
            type: "number",
            disabled: true,
        },
        {
            label: "Delivery Charge",
            field: "deliverycharge",
            value: formData.deliverycharge,
            type: "number",
        },
        {
            label: "Grand Total",
            value: grandtotal,
            type: "number",
            disabled: true,
        },
    ];

}