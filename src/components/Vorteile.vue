<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-4 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Personal Pilates</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ..bewegt & entspannt
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          "Ich brenne für Pilates. Wenn ich sehe, wie körperliche Beschwerden verschwinden, sich die Haltung verbessert und der Körper in Form kommt, bin ich glücklich." <span class="text-sm">Suzanne Adler</span>
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative"
          >
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                <component
                  :is="feature.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { HeartIcon } from "@heroicons/vue/outline";

const features = [
  {
    name: " Bauch und Rücken",
    description: "Sie stärken gezielt ihre Bauch- und Rückenmuskulatur",
    icon: HeartIcon,
  },
  {
    name: "Wirbelsäule",
    description: "Mobilisieren Sie die Wirbelsäule",
    icon: HeartIcon,
  },
  {
    name: "Schultergürtel",
    description: "Entlasten Sie Schultern und Nacken.",
    icon: HeartIcon,
  },
  {
    name: "straffe Figur",
    description: "Sie formen eine straffe Figur und fördern mentale Balance",
    icon: HeartIcon,
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>