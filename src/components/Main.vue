<template>
  <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
    <Sidebar />
    <main class="py-6 bg-gray-300 xl:flex-1 xl:overflow-x-hidden">
      <PropertyCardList :class="idx === 0 ? '' : 'mt-6'" v-for="(list, idx) of data" :key="idx" :list="list" />
    </main>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import PropertyCardList from "./PropertyCardList";

export default {
  components: {
    Sidebar,
    PropertyCardList
  },
  data() {
    return {
      data: [
        {
          intro: {
            title: "Los Angeles",
            subtitle:
              "Live like the stars in these luxurious Southern California estates."
          },
          properties: [
            {
              id: 1,
              imageUrl:
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Rear view of modern home with pool",
              beds: 3,
              baths: 2,
              title:
                "Modern executive home in the heart of historic Los Angeles",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            },
            {
              id: 2,
              imageUrl:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Quiet living outside the city",
              beds: 3,
              baths: 2,
              title: "Quiet living outside the city",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            },
            {
              id: 3,
              imageUrl:
                "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Rear view of modern home with pool",
              beds: 3,
              baths: 2,
              title: "Renovated apartment uptown",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            },
            {
              id: 4,
              imageUrl:
                "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Family home in the suburbs",
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            }
          ]
        },
        {
          intro: {
            title: "Phoenix",
            subtitle:
              "Escape the cold and enjoy great weather without breaking the bank."
          },
          properties: [
            {
              id: 5,
              imageUrl:
                "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Rear view of modern home with pool",
              beds: 3,
              baths: 2,
              title:
                "Modern executive home in the heart of historic Los Angeles",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            },
            {
              id: 6,
              imageUrl:
                "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Quiet living outside the city",
              beds: 3,
              baths: 2,
              title: "Quiet living outside the city",
              priceInCents: 190000,
              formattedPrice: "$1,900.00",
              reviewCount: 34,
              rating: 4
            },
            {
              id: 7,
              imageUrl:
                "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Renovated apartment uptown",
              beds: 3,
              baths: 2,
              title: "Renovated apartment uptown",
              priceInCents: 200000,
              formattedPrice: "$2,000.00",
              reviewCount: 54,
              rating: 5
            },
            {
              id: 8,
              imageUrl:
                "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
              imageAlt: "Family home in the suburbs",
              beds: 3,
              baths: 2,
              title: "Family home in the suburbs",
              priceInCents: 115000,
              badge: "plus",
              formattedPrice: "$1,150.00",
              reviewCount: 34,
              rating: 4
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>