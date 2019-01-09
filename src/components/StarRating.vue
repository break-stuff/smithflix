<template>
    <div class="star-rating" :title="ratingPecent">
        <div class="back-stars">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>

            <div class="front-stars" :style="`width: ${ratingPecent}`">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StarRating',
    props: [ 'rating' ],
    computed: {
        ratingPecent() {
            return !this.rating ? 0 : parseFloat(this.rating) * 10 + '%';
        }
    }
};
</script>