
<template>

  <div class="h-screen flex overflow-hidden bg-gray-100">
    <TransitionRoot
      as="template"
      :show="sidebarOpen"
    >
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative flex-1 flex flex-col max-w-xs w-full bg-blue-700">
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon
                    class="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">

              <nav class="mt-5 px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[item.current ? 'bg-blue-800 text-white' : 'text-white hover:bg-blue-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-base font-medium rounded-md']"
                >
                  <component
                    :is="item.icon"
                    class="mr-4 flex-shrink-0 h-6 w-6 text-blue-300"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-blue-800 p-4">
              <a
                href="#"
                class="flex-shrink-0 group block"
              >
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-base font-medium text-white">
                      Tom Cook
                    </p>
                    <p class="text-sm font-medium text-blue-200 group-hover:text-white">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TransitionChild>
        <div
          class="flex-shrink-0 w-14"
          aria-hidden="true"
        >
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden bg-blue-700 md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex-1 flex flex-col min-h-0">
          <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">

            <nav class="mt-5 flex-1 px-2 space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[item.current ? 'bg-blue-800 text-white' : 'text-white hover:bg-blue-600 hover:bg-opacity-75', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']"
              >
                <component
                  :is="item.icon"
                  class="mr-3 flex-shrink-0 h-6 w-6 text-blue-300"
                  aria-hidden="true"
                />
                {{ item.name }}

              </a>

              <a
                @click="handleClick"
                class="text-white hover:bg-blue-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              >
                <component
                  :is="LogoutIcon"
                  class="mr-3 flex-shrink-0 h-6 w-6 text-blue-300"
                  aria-hidden="true"
                /> Ausloggen
              </a>

            </nav>
          </div>
          <div class="flex-shrink-0 flex border-t border-blue-800 p-4">
            <a
              href="#"
              class="flex-shrink-0 w-full group block"
            >
              <div class="flex items-center">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-white">
                    {{user.displayName}}
                  </p>
                  <p class="text-xs font-medium text-blue-200 group-hover:text-white">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuIcon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Guthaben kaufen</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

            <div class="py-4">

              <div
                @click="handleBuy"
                style="cursor: pointer"
                class="border-4 border-dashed border-gray-200 rounded-lg h-96"
              />
              <p>{{error}}</p>

            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  LogoutIcon,
  FilmIcon,
  MenuIcon,
  CurrencyEuroIcon,
  XIcon,
} from "@heroicons/vue/outline";

import { watch } from "@vue/runtime-core";

import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
import { projectAuth } from "../firebase/config";
import useCollection from "../composables/useCollection";

const navigation = [
  { name: "Live Video Training", href: "#", icon: FilmIcon, current: false },
  {
    name: "Guthaben kaufen",
    href: "#",
    icon: CurrencyEuroIcon,
    current: true,
  },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);
    const message = ref("");

    const { user } = getUser();
    const router = useRouter();

    const { error, addDoc } = useCollection("customers");

    const handleBuy = async () => {
      const userName = user.value.displayName;
      const userID = user.value.uid;
      const customer = {
        name: userName,
        package: 5,
      };

      await addDoc(userID, customer);
      message.value = "";
      if (!error.value) {
        error.value = "";
      } else {
        message.value = error.value;
      }
    };

    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });

    const handleClick = () => {
      projectAuth.signOut();
    };

    return {
      navigation,
      sidebarOpen,
      user,
      LogoutIcon,
      handleClick,
      handleBuy,
      error,
    };
  },
};
</script>



