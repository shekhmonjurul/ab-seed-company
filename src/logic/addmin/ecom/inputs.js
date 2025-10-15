export default function inputs(userinfo) {
  return  [
        { label: "Name", variant: "big-width", placeholder: "Customer Name", value: userinfo?.name, onChange: (e) => e.target.value, },
        {
            label: "Mobile Number",
            variant: "big-width",
            placeholder: "Mobile Number",
            onChange: handleChange("number"),
            value: userinfo?.number,
        },
        { label: "Address", variant: "textarea", placeholder: "Enter address", value: userinfo?.address, onChange: handleChange("address"), },
        {
            label: "Shipping Note",
            variant: "textarea",
            placeholder:
                "নোট  দিলে হবে (আমরা নোট ফলো করি)  বিশেষ সমস্যা হলে কল করবেন ।",
            value: userinfo?.note,
            onChange: handleChange("note"),
        },
    ];
} 