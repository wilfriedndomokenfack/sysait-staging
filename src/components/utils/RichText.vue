<template>
  <div>
    <div rounded class="text-grey-10 text-bold text-h6 bg-grey-4 title-rich">{{localLabel}}</div>
    <q-editor
      toolbar-bg="grey-4"
      toolbar-text-color="grey-10"


      v-model="localModel"
      min-height="10rem"
      :placeholder="localLabel"
      :dense="$q.screen.lt.md"
      :toolbar="[
         ['undo', 'redo'],

        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
        ['token', 'hr', 'link', 'custom_btn'],

        [
          {
            label: $q.lang.editor.formatting,
            icon: $q.iconSet.editor.formatting,
            fixedLabel: false,
            list: 'no-icons',
            options: [
              'p',
              'h1',
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'code'
            ]
          },
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
    />
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
    }
  },
  watch: {
    localModel: {
      immediate: true,
      handler() {
        const modelData = {
         model: this.localModel,
         modelKey: this.propModelName
        }
        this.$emit('modelData', modelData)
      }
    }
  }
}
</script>
<style lang="scss">
.title-rich{
  border-bottom: 3px solid $primary
}
</style>
