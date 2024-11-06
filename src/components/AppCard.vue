<script>
export default {
  name: 'AppCard',
  props: ['consultorio'],
}
</script>

<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
      <img
        class="rounded-t-lg h-[320px] w-full"
        :src="consultorio.imagePath"
        alt=""
      />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ consultorio.title }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700">
        {{ consultorio.description }}.
      </p>
      <router-link
        :to="{ name: 'consultorio.detalhes', params: { id: consultorio.id } }"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Ver mais
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
