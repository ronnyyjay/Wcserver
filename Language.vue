<template>
    <div id="Language">
        <div id="right-info">
            <div class="container">
                <div class="fave" role="alert">
                    <ul>
                        <li>{{ l1 }}</li>
                        <li>{{ l2 }}</li>
                        <li>{{ l3 }}</li>
                        <li>{{ l4 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Language',
    data () {
        return {
            l1: 'Ilocano',
            l2: 'Kapampangan',
            l3: 'Tagalog',
            l4: 'English',
        }
    }
}
</script>