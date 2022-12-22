import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/js/firebase";

let itemsCollectionRef = [];
let itemsCollectionQuery = [];
let getItemsSnapshot = null;

export const useStoreSheet = defineStore("storeSheet", {
  state: () => {
    return {
      items: [
        // {
        //   title: "Vue Init1",
        //   href: "https://vuejs.org/guide/introduction.html",
        //   cat: "Init",
        //   desc1: "",
        //   code1: "npm init vue@latest",
        //   code2: "",
        // },
      ],
      itemsLoaded: false,
    };
  },

  actions: {
    init() {
      itemsCollectionRef = collection(db, "cheatsheet");
      itemsCollectionQuery = query(itemsCollectionRef);
      //initialize database refs
      this.getItems();
    },
    async getItems() {
      this.itemsLoaded = false;

      getItemsSnapshot = onSnapshot(
        itemsCollectionQuery,
        (querySnapshot) => {
          let items = [];
          querySnapshot.forEach((doc) => {
            let item = {
              id: doc.id,
              title: doc.data().title,
              cat: doc.data().cat,
              desc1: doc.data().desc1,
              desc2: doc.data().desc2,
              desc3: doc.data().desc3,
              desc4: doc.data().desc4,
              code1: doc.data().code1,
              code2: doc.data().code2,
              code3: doc.data().code3,
              code4: doc.data().code4,
              href: doc.data().href,
              array1: doc.data().array1,
            };
            items.push(item);
          });

          this.items = items;
          this.itemsLoaded = true;
        },
        (error) => {
          console.log("error message", error.message);
        }
      );
    },
    clearItems() {
      this.items = [];
      if (getItemsSnapshot) getItemsSnapshot(); //unsubscribe from any active listener
    },
    async addItems(
      newTitle,
      newCat,
      newHref,
      newDesc1,
      newDesc2,
      newDesc3,
      newDesc4,
      newCode1,
      newCode2,
      newCode3,
      newCode4,
      newArray1
    ) {
      let currentDate = new Date().getTime(),
        date = currentDate.toString();

      await addDoc(itemsCollectionRef, {
        title: newTitle,
        cat: newCat,
        href: newHref,
        desc1: newDesc1,
        desc2: newDesc2,
        desc3: newDesc3,
        desc4: newDesc4,
        code1: newCode1,
        code2: newCode2,
        code3: newCode3,
        code4: newCode4,
        array1: newArray1,
        date,
      });
    },
    async deleteItem(idToDelete) {
      await deleteDoc(doc(itemsCollectionRef, idToDelete));
    },
    async updateItem(id, content, contentDate) {
      await updateDoc(doc(itemsCollectionRef, id), {
        content: content,
        contentDate: contentDate,
      });
    },
  },
  getters: {
    getItemsCount: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
    getItemsCount: (state) => {
      return state.items.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
