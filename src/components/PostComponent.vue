<template>
  <div>
    <q-card flat bordered>
      <q-card-section>
        <q-img
          :src="meta.image"
          :class="{ 'large-w': !$q.screen.gt.md }"
          class="small-w cursor-pointer"
          @click="openPost"
        ></q-img>
        <div class="flex">
          <q-btn
            class="q-ma-sm"
            round
            flat
            dense
            :icon="likeIcon"
            @click="likePost"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            round
            flat
            dense
            :icon="dislikeIcon"
            @click="dislikePost"
          ></q-btn>
          <q-btn
            class="q-ma-sm"
            round
            flat
            dense
            icon="mdi-comment-outline"
            @click="commentField = !commentField"
          ></q-btn>
        </div>
        <div class="q-ma-sm">
          <p>{{ meta.description }}</p>
        </div>
        <div v-if="commentField" class="q-ma-sm">
          <q-input
            v-model="newComment"
            dense
            borderless
            color="grey-10"
            placeholder="Add a comment..."
          >
            <template v-slot:after>
              <q-btn round dense flat icon="send" @click="addComment" />
            </template>
          </q-input>
        </div>
        <div class="q-ma-sm">
          <div
            class="flex q-mt-xs"
            v-for="item in meta.coments.slice(0, 3)"
            :key="item.id"
          >
            <b class="q-mr-sm">{{ item.user }}</b>
            {{ item.coment }}
          </div>
          <div
            class="q-mt-sm cursor-pointer text-grey-6"
            v-if="meta.coments.length > 3"
            @click="openPost"
          >
            Show all {{ meta.coments.length }} comments...
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Posts } from './models'

@Component
export default class PostComponent extends Vue {
  @Prop({ type: Object, required: true }) readonly meta!: Posts
  @Prop(Boolean) active!: boolean

  commentField = false

  likeIcon = 'mdi-thumb-up-outline'

  dislikeIcon = 'mdi-thumb-down-outline'

  newComment = ''

  likePost () {
    if (this.likeIcon === 'mdi-thumb-up-outline') {
      this.likeIcon = 'mdi-thumb-up'
      this.dislikeIcon = 'mdi-thumb-down-outline'
    } else {
      this.likeIcon = 'mdi-thumb-up-outline'
    }
  }

  dislikePost () {
    if (this.dislikeIcon === 'mdi-thumb-down-outline') {
      this.dislikeIcon = 'mdi-thumb-down'
      this.likeIcon = 'mdi-thumb-up-outline'
    } else {
      this.dislikeIcon = 'mdi-thumb-down-outline'
    }
  }

  addComment () {
    const item = {
      coment: this.newComment,
      user: 'myUser',
      id: this.meta.coments.length + 1
    }
    this.commentField = false
    this.newComment = ''

    this.meta.coments.unshift(item)
  }

  openPost () {
    this.active = true
  }
}
</script>

<style>
.small-w {
  width: 40vw;
  height: 30vw;
}

.large-w {
  width: 80vw;
  height: 70vw;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
