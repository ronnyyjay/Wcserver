<template>
    <div id="hobbies">
        <div id="right-info">
            <div class="container">
                <div class="hobbies" role="alert">
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
    name: 'hobbies',
    data () {
        return {
            l1: 'Playing Online Games',
            l2: 'Playing Basketball',
            l3: 'Playing Table Tennis',
            l4: 'Doing Household Chores',
        }
    }
}
</script>