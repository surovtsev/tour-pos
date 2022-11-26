<template>
  <b-container class="import">
    <b-row>
      <b-col>
        <h1>Import Arrival tourists</h1>
      </b-col>
    </b-row>
    <b-form-group
      label="File:"
      label-for="fileInput"
      description="Select *.csv file with tourists"
    >
      <b-form-file
        id="file_input2"
        v-model="file"
        choose-label="Browse"
        @change="onFileChange"
        required
        accept=".csv"
      ></b-form-file>
    </b-form-group>
    <b-row>
      <b-col>
        <b-button variant="primary" to="/print-departures">Print</b-button>
      </b-col>
    </b-row>
    <b-row v-if="tourists">
      <b-col>
        <h2>Import preview:</h2>
      </b-col>
      <b-col>
        <b-table striped hover small :items="tourists"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getDenormTourists } from "../helpers/import-csv";

export default {
  name: "ImportItem",
  data() {
    return {
      file: null,
      reservations: [],
    };
  },
  methods: {
    ...mapActions(["setImportContent", "isLoading"]),
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.processFile(files[0]);
    },
    processFile(file) {
      console.log(file);
      // todo: check file extension is csv
      const reader = new FileReader();
      reader.onload = this.fileLoaded;
      reader.readAsText(file);
    },
    fileLoaded(e) {
      const content = e.target.result;
      const tourists = getDenormTourists(content);
      this.$store.dispatch("setImportContent", tourists);
    },
  },
  computed: {
    ...mapGetters({
      tourists: "tourists",
      loadingTourists: "loadingTourists",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
