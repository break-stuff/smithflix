<template>
    <div class="content container">
        <h1>Cart</h1>

        <table v-if="cartLines.length > 0" class="table table-striped table-dark table-bordered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Days</th>
                    <th scope="col">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(line, index) in cartLines" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ line.title }}</td>
                    <td>{{ line.price | currency }}</td>
                    <td>{{ line.days }}</td>
                    <td>{{ line.days * line.price | currency }}</td>
                </tr>
            </tbody>
            <tfoot>
                    <th colspan="4" scope="row"><strong>Total:</strong></th>
                    <td>{{ getTotal | currency }}</td>
            </tfoot>
        </table>
        <div v-else class="align-middle text-center">
            <h2>Your cart is empty!</h2>
            <h3>Check out some of our <router-link class="text-white-50" to="dashboard">great movies</router-link> and add them to the cart.</h3>
        </div>
    </div>
</template>

<script>
import cartUtil from "../utils/cartUtil";

export default {
    name: "Cart",
    data() {
        return {
            cartLines: cartUtil.getCart()
        };
    },
    computed: {
        getTotal() {
            return cartUtil.getCart().reduce(
                (total, line) => total + (line.price * line.days),
                0
            );
        }
    }
};
</script>