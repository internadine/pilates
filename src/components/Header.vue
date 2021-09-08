<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class=" bg-white">
    <header>
      <Popover class="relative bg-white">
        <div class="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div class="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span class="sr-only">Workflow</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt=""
              />
            </a>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span class="sr-only">Open menu</span>
              <MenuIcon
                class="h-6 w-6"
                aria-hidden="true"
              />
            </PopoverButton>
          </div>
          <PopoverGroup
            as="nav"
            class="hidden md:flex space-x-10"
          >

            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {{ item.name }}
            </a>
          </PopoverGroup>
          <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Einloggen
            </a>
            <a
              href="#"
              class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Anmelden
            </a>
          </div>
        </div>

        <transition
          enter-active-class="duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                      <span class="sr-only">Close menu</span>
                      <XIcon
                        class="h-6 w-6"
                        aria-hidden="true"
                      />
                    </PopoverButton>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid grid-cols-1 gap-7">
                    <a
                      v-for="item in solutions"
                      :key="item.name"
                      :href="item.href"
                      class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                    >
                      <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                        <component
                          :is="item.icon"
                          class="h-6 w-6"
                          aria-hidden="true"
                        />
                      </div>
                      <div class="ml-4 text-base font-medium text-gray-900">
                        {{ item.name }}
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div class="py-6 px-5">
                <div class="grid grid-cols-2 gap-4">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {{ item.name }}
                  </a>
                </div>
                <div class="mt-6">
                  <a
                    href="#"
                    class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Anmelden
                  </a>
                  <p class="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?
                    <a
                      href="#"
                      class="text-gray-900"
                    >
                      Einloggen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </header>

    <main>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div class="absolute inset-0">
                <img
                  class="h-full w-full object-cover"
                  src="https://www.indigourlaub.com/var/site/storage/images/_aliases/ngallery_preview_10etxy_low19/0/9/9/9/39990-1-ger-DE/Pilates3.png"
                  alt="People working on laptops"
                />
                <div class="absolute inset-0 bg-blue-600 mix-blend-multiply" />
              </div>
              <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span class="block text-white">Personal Pilates</span>
                  <span class="block text-blue-200">mit Susanne Adler</span>
                </h1>
                <p class="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                  Vital Coach - Zertifizierte Pilates Trainering - Autorin
                </p>
                <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50 sm:px-8"
                    >
                      Online teilnehmen
                    </a>
                    <a
                      href="#"
                      class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Termine
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Logo cloud -->
        <div class="bg-gray-100">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Mein Angebot
            </p>
            <div class="font-black text-gray-400 text-xl mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                Personal Training
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                Kleingruppen-Kurse
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                Pilates für Kinder
              </div>
              <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                Firmen-Fitness
              </div>
              <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                Workshops und Seminare
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Preise", href: "#" },
  { name: "Videos", href: "#" },
  { name: "Susanne", href: "#" },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      solutions,
      navigation,
    };
  },
};
</script>