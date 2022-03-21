<template>
    <div id="skills">
        <div id="right-info">
            <div class="container">
                <div class="skills" role="alert">
                    <ul>
                        <li>{{ l1 }}</li>
                        <li>{{ l2 }}</li>
                        <li>{{ l3 }}</li>
                        <li>{{ l4 }}</li>
                        <li>{{ l5 }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'skills',
    data () {
        return {
            l1: 'Python',
            l2: 'Java',
            l3: 'HTML',
            l4: 'Php',
            l5: 'MySQL',
        }
    }
}
</script>