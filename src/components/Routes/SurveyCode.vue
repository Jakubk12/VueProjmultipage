<template>
   <div><h1>We can send news for you about frontend technologies. You just provide your e-mail adress and fill the questionaire </h1>
    </div> 
    <form class="main" @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity === ''}">
        <label for="user-name">Your Name: </label>
        <input class="input" id="user-name" name="user-name" type="text" v-model="UserName" @blur="validationInput" />
        <p v-if="userNameValidity === 'invalid'"> Please enter a valid Name!</p>
        </div>
        <div class="form-control">
        <label for="user-age">Your Age ( Years old ) </label>
        <input class="input" id="user-age" name="user-age" type="number" ref="ageInput" v-model="UserAge" />
        </div>
        <div class="form-control">
            <label for="referrer"> What is the most interest topic for you?</label>
            <select class="input" id="referrer" name="referrer" v-model="referrer">
                <option class="input" value="ModernFrameworks">Modern Frameworks</option>
                <option class="input" value="CSSpreprocessors">CSSpreprocessors</option>
                <option class="input" value="PerformanceRules">Performance rules</option>
            </select>
            <div class="form-control">
                <h1>How long are you interested in coding?</h1>
            <div>
                <input 
                 type="checkbox" 
                 id="level-Novice"
                 name="level"
                 value="Elementary"
                 v-model="level" />
                <label for="Novice">Below 6 months </label>
                <input 
                type="checkbox" 
                id="level-Beginner" 
                name="level" 
                value="Upper-elementary" 
                v-model="level"/>
                <label for="Beginner">6-12 months</label>
                <input 
                type="checkbox" 
                id="level-Intermediate" 
                name="level" 
                value="Mid" 
                v-model="level"/>
                <label for="Intermediate">12-24 months</label>
                <input 
                type="checkbox" 
                id="level-Advanced" 
                name="level" 
                value="Senior" 
                v-model="level"/>
                <label for="Advanced">2+years </label>
            </div>
            </div>
            <div class="form-control">
                <h2> what's your best field in coding?</h2>
                <input 
                type="radio" 
                name="What frontend" 
                id="frontend" 
                value="frontend"
                v-model="What" />
                <label for="frontend">Frontend</label>
                <input 
                type="radio" 
                name="What backend" 
                id="backend"
                value="backend" 
                v-model="What" />
                <label for="backend">Backend</label>
            </div>
            <rating-component v-model="rating" ></rating-component>
            <div class="form-control">
            <input type="checkbox" name="confirm-terms" id="confirm-terms" v-model="confirm"/>
            <label for="confirm-terms">Agree to terms for use?</label>
            </div>
            </div>
            <div class="strip">
                  <basic-button @click="ConfirmInput"></basic-button>            
        </div>
        </form>
</template>

<script>
import RatingComponent from './layouts/RatingComponent.vue';
import BasicButton from './RoutesUI/BasicButton.vue';
export default {
    components: {
        RatingComponent : RatingComponent,
        BasicButton : BasicButton,
    },
    data() {
        return {
            UserName: '',
            UserAge: null,
            referrer: 'ModernFrameworks',
            level: [],
            What: null,
            confirm: false,
            rating: null,
            userNameValidity: 'pending',
     };
    },
   methods: {
    SubmitForm() {
        console.log('Username: ' + this.UserName);
        this.UserName = '';
        console.log('Userage: ');
        console.log(this.UserAge + 5);
        console.log(this.$refs.ageInput.value + 5);
        console.log(25);
        this.userAge = null;
        console.log('referrer' + this.referrer);
        this.referrer = 'ModernFrameworks';
        console.log('Checkboxes');
        console.log(this.level);
        console.log('Radio buttons');
        this.level = [];
        this.what = null;
        console.log('confirm?');
        console.log(this.confirm);
        this.confirm = false;
        console.log('rating')
        console.log(this.rating)
        this.rating = null;

    },
    validationInput() {
        if(this.UserName === '') {
         this.userNameValidity = 'invalid'; } else {
            this.userNameValidity = 'valid'
         }
    },
    ConfirmInput() {
        this.$router.push('/components/MainComponent')
    }
   }
}
</script>

<style lang="scss" scoped>

.main {
    margin: 20px;
    border: 10px solid grey;
    border-top-right-radius: 400px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 400px;
    color: green;

    
}

.form-control {
margin-left: 1em;


}
.input {
    background-color:#92a8d1;
	padding:5px;
	position:relative;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	background-image: linear-gradient(bottom, rgb(100,170,30) 0%, rgb(129,212,51) 100%);
	border-radius: 5px;
    margin: 10px;
}



</style>