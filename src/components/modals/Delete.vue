<template>
    <div class="mx-4 my-6">
        <div class="relative">
            <div class="p-4 md:p-5 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500">Are you sure you want to delete
                    this product?</h3>
                <button data-modal-hide="popup-modal" type="button"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                    @click="onClose({
                        data: null,
                        success: true,
                        code: 0,
                        message: STATUS.SUCCESS
                    })">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                    @click="onClose({
                        data: null,
                        success: false,
                        code: 0,
                        message: STATUS.CANCELED
                    })">
                    No, cancel
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import { STATUS } from '@/core/utils/constants';

export default {
    data() {
        return {
            STATUS
        }
    },
    methods: {
        onClose(e) {
            this.$emit("close")
            this.$root.$emit('closed-delete-modal', e)
        }
    }
}
</script>