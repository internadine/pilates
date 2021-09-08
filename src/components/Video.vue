
<template>
  <div class="bg-gray-100">

    <div class="py-10">
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Susanne Adler - Deine Trainerin
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-8 sm:px-0 ">
            <div class="flex justify-center border-4 border-dashed border-gray-200 rounded-lg h-96 ">
              <iframe
                class="p-20 h-full shadow-xl rounded-xl w-full"
                src="https://www.youtube-nocookie.com/embed/MeOhS7hwgu0"
              ></iframe>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      user,
      navigation,
      userNavigation,
    };
  },
};
</script>

<style >
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 800px;
  position: absolute;
}
</style>