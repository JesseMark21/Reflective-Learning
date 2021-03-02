<template>
<div>
<app-header></app-header>
<image-upload></image-upload>
<!-- <meme-upload></meme-upload>
<meme-title></meme-title>
<reason></reason>
<app-footer></app-footer> -->
</div>
</template>
<script>

const STORAGE_KEY = 'meme-storage';
import App from './App.vue'
import Header from './components/Header.vue'
new Vue({
  el: '.memeapp',
  data () {
    return {
      newMeme: '',
      newMemeReason: '',
      newMemeImage: null,
	  newMemeUrl: '',
	  base64:'',
      memes:[],
	  visibleMemes: false,
	  image: null,
	  images: [],
	  sources: [],
      editedMeme:null,
      visibility: 'all',
      template: '<App/>',
      components: { App,
	  'app-header': Header,
	  },

    }
  },
  mounted:function(){
	  this.loadImages()
  },
  created () {
      this.memes = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  computed: {
    filteredMemes() {
          return this.memes;
    },
	memeImages(){
		this.loadImages();
		return this.images;
	},
	memeSrc(){
		this.loadImages();
		return this.sources;
	}

  },
  methods: {
    addMeme() {
		
		this.memes.push({title: this.newMeme, image: this.newMemeImage, reason: this.newMemeReason, id: this.memes.length, visible: false});
		//   this.images.push(this.newMemeImage);
		//   this.$store.commit('addMeme', this.newMeme, this.newMemeReason, this.newMemeImage);
		this.newMeme = '';
		this.newMemeReason = '';
		this.newMemeImage = null;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memes));
		this.loadImages();
    },
	loadImages(){
		this.images = [];
		this.sources = [];
		this.memes.forEach(element =>{
			var img = new Image();
			img.src = element.image;
			img.width = 200;
			this.images.push(img);
			this.sources.push({source: img.src, title: element.title, description: element.reason});
		})

	},
	// showMemes(){
	// 	if(!this.visibleMemes){
	// 		this.images.forEach(element => {
	// 					document.body.appendChild(element);
	// 				});
	// 				this.visibleMemes = true;
	// 	}
	// 	else{
	// 		this.images.forEach(element => {
	// 					document.body.removeChild(element);
	// 				});
	// 				this.visibleMemes = false;
	// 	}
	// },
    
    removeMeme(meme, id) {
      this.memes.splice(this.memes.indexOf(meme), 1);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memes));
	  this.loadImages();
    },
    editMeme(meme) {
      this.editedMeme = meme;
	  this.loadImages();
    },
	getSrc(meme){
		return meme.image;
	},
    doneEdit(meme) {
      if (!this.editedMeme) {
          return
      }
      this.editedMeme = null;
      meme.title = meme.title.trim();
      if (!meme.title) {
        this.removeMeme(meme);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memes));
	  this.loadImages();
    }
  }
});
</script>

<style>
	#app {
		font-family: Lato, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 0px;
	}
</style>