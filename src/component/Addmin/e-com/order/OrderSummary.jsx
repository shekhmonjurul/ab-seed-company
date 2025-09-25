export default function OrderSummary() {
    return (
        <div className="text-black">
            {/* order summary */}
            <div className="text-black text-left">
                {/* order summary */}
                <div>
                    <h1>Order Summary</h1>
                    <h5>#57612</h5>
                </div>
                <hr />

                {/* customer details */}
                <div>
                    <div>
                        <p>Date</p>
                        <p>Sep 25, 2025, 3.55 PM</p>
                        <p>Payment</p>
                        <p>cod</p>
                    </div>

                    <div>
                        <p>status</p>
                        <p>PROCESSING</p>
                        <p>Source</p>
                        <p>Facebook</p>
                    </div>
                </div>
                <hr />

                {/* subtoal */}
                <div>
                    <div>
                        <p>Subtotal</p>
                        <p>511</p>
                    </div>
                    <div>
                        <p>Delivery</p>
                        <p>50</p>
                    </div>
                    <div>
                        <h2>Total</h2>
                        <h2>561</h2>
                    </div>
                </div>

                {/* order items */}
                <div>
                    <h1>Order Items</h1>
                    <hr />
                    <span>21</span>
                    <span>combo 21 seed</span>
                    <span>1x</span>
                    <span>189 BDT</span>
                </div>
            </div>


            {/* order tags */}
            <div>
                <h3>Order Tags</h3>
                <hr />
                <select name="" id="add-tags">
                    <optgroup label="Available Tags">
                        <option value="">+ Add Tag</option>
                        <option value="">Custom Tag</option>
                        <option value="">Custom Tag</option>
                        <option value="">Custom Tag</option>
                        <option value="">Custom Tag</option>
                    </optgroup>
                </select>
            </div>

            {/* order actions */}
            <div>
                <h3>Order Actions</h3>
                <hr />
                <select name="" id="change-status">
                    <optgroup >
                        <option value="">PROCESSING</option>
                        <option value="">PROCESSING</option>
                        <option value="">PROCESSING</option>
                        <option value="">PROCESSING</option>
                        <option value="">PROCESSING</option>
                    </optgroup>
                </select>
                <div>
                    <textarea name="note" id="note" placeholder="Note"></textarea>
                    <button>Add Note</button>
                </div>
            </div>
            <div>
                <button>Send Reminder SMS</button>
                <button>Send Advance SMS</button>
            </div>

        </div>
    )
}
