<template>
  <div>
    <div rounded class="text-grey-10 text-h7 q-pl-sm bg-grey-4 title-rich">{{localLabel}}</div>
    <q-editor
      ref="editor"

      toolbar-bg="grey-4"
      toolbar-text-color="grey-10"

      v-model="localModel"
      min-height="20rem"
      :placeholder="localLabel"
      :toolbar="[
         ['undo', 'redo'],

        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['hr', 'link', 'custom_btn'],

        [
          {
            label: $q.lang.editor.fontSize,
            icon: $q.iconSet.editor.fontSize,
            fixedLabel: false,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'size-1',
              'size-2',
              'size-3',
              'size-4',
              'size-5',
              'size-6',
              'size-7'
            ]
          },
          {
            label: $q.lang.editor.defaultFont,
            icon: $q.iconSet.editor.font,
            fixedIcon: true,
            list: 'no-icons',
            options: [
              'default_font',
              'arial',
              'arial_black',
              'comic_sans',
              'courier_new',
              'impact',
              'lucida_grande',
              'times_new_roman',
              'verdana'
            ]
          },
          {
            label: $q.lang.editor.align,
            icon: $q.iconSet.editor.align,
            fixedLabel: false,
            options: ['left', 'center', 'right', 'justify']
          },
          'token',
          'removeFormat'
        ],
        ['quote', 'unordered', 'ordered'],

        ['viewsource','fullscreen']
      ]"
      :fonts="{
        arial: 'Arial',
        arial_black: 'Arial Black',
        comic_sans: 'Comic Sans MS',
        courier_new: 'Courier New',
        impact: 'Impact',
        lucida_grande: 'Lucida Grande',
        times_new_roman: 'Times New Roman',
        verdana: 'Verdana'
      }"

    >
      <template v-slot:token>
        <q-btn-dropdown dense no-caps ref="token" class="bg-grey-4" no-wrap unelevated color="white" text-color="black" icon="format_color_fill" size="sm">
          <q-color v-model="highlight" default-view="palette" no-header no-footer class="my-picker" />
        </q-btn-dropdown>

        <q-btn-dropdown dense no-caps ref="token" class="bg-grey-4" no-wrap unelevated color="white" text-color="black" icon="format_color_text" size="sm">
          <q-color v-model="foreColor" default-view="palette" no-header no-footer class="my-picker" />
        </q-btn-dropdown>
      </template>
    </q-editor>
  </div>
</template>

<script>
export default {
  name: 'RichText',
  props:["label", "propModel","propModelName"],
  data () {
    return {
      localLabel: this.label || "Default lavel",
      localModel: this.propModel || "",
      toolbar: null,
      mycolor: null,
      colorSet: {
        foreColor: '#000000',
        highlight: '#ffff00aa',
      },


      foreColor: '#000000',
      highlight: '#ffff00aa',
      editor: 'Select some text,' +
        ' then select a highlight or text color!'

    }
  },
  watch: {
    localModel: {
      immediate: true,
      handler() {
        this.localModelChanged()
      }
    },
    highlight: {
      immediate: true,
      handler() {
        this.color('backColor', this.highlight)
      }
    },
    foreColor: {
      immediate: true,
      handler() {
        this.color('foreColor', this.foreColor)
      }
    }
  },
  mounted(){
    this.colorSet = []
  },
  methods: {
    color (cmd, name) {
      const edit = this.$refs.editor
      this.$refs.token?.hide()
      edit?.caret.restore()
      edit?.runCmd(cmd, name)
      edit?.focus()
    },
    saveWork(){
      this.$emit("save")
    },
    localModelChanged(){
      const modelData = {
        model: this.localModel,
        modelKey: this.propModelName
      }
      this.$emit('modelData', modelData)
    }
  }
}
</script>
<style lang="scss">
.title-rich{
  border-bottom: 3px solid $primary
}
</style>
