<template>
  <div class="container-fluid my-4">
    <!-- <h3 class="text-center mb-3">Poruke podrške</h3> -->

    <div ref="messagesContainer" class="messages_container">
      <div @click="toggleHamburger" class="hamburger-messages" ref="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="inbox">
        <div class="headind_srch">
          <div class="srch_bar">
            <div class="stylish-input-group">
              <input
                type="text"
                class="search-bar"
                v-model="search"
                placeholder="Pretraga"
              />
              <span class="input-group-addon">
                <button type="button">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </span>
            </div>
          </div>
        </div>

        <div class="inbox_chat">
          <div
            class="chat_list"
            v-for="(message, i) in filtered"
            :key="message.id"
            @click="
              readMessages(message.from, message.to);
              current = i;
            "
            :class="{ active_chat: current === i }"
          >
            <div class="chat_people">
              <div class="chat_img">
                <img :src="message.photo" alt="sunil" />
              </div>
              <div class="chat_ib">
                <h5>
                  {{ message.status }} {{ message.name
                  }}<span class="chat_date">{{
                    formatDate(message.created_at, message.updated_at)
                  }}</span>
                </h5>
                <p>{{ shortMessages(message.message, 85) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="message position-relative">
        <i
          @click="expand = !expand"
          class="fa fa-search mb-3"
          aria-hidden="true"
        ></i>
        <input
          :class="{ expandSearch: expand }"
          v-model="search_message"
          class="w-0"
          type="text"
        />
        <div id="messages" class="msg_history" ref="messagesScroll">
          <template v-for="message in filteredMessage">
            <div
              class="outgoing_msg"
              v-if="message.from == registered_id"
              :key="message.id"
            >
              <div
                class="sent_msg"
                @contextmenu="
                  openMenu($event, message.id);
                  active_message = message.message;
                "
              >
                <p>
                  {{ message.message }}
                </p>
              </div>
              <div class="message_detail">
                <div class="time_date">
                  {{ formatDate(message.created_at, message.updated_at) }}
                </div>
                <div
                  v-if="
                    message.created_at != message.updated_at ||
                    edit.includes(message.id)
                  "
                  class="time_date"
                >
                  - Izmijenjeno
                </div>
              </div>
            </div>
            <div class="incoming_msg" v-else :key="message.id">
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>
                    {{ message.message }}
                  </p>
                  <span class="time_date">
                    {{
                      formatDate(message.created_at, message.updated_at)
                    }}</span
                  >
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="type_msg">
          <div class="input_msg_write">
            <input
              type="text"
              class="write_msg"
              v-model="new_message"
              placeholder="Type a message"
              @keyup.enter="sendMessage()"
            />
            <button class="msg_send_btn" type="button" @click="sendMessage()">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ul
      id="right-click-menu"
      tabindex="-1"
      ref="right"
      v-if="viewMenu"
      v-on-clickaway="closeMenu"
      :style="{ top: top, left: left }"
    >
      <li @click="deleteMessage()">Obriši poruku</li>
      <li
        @click="
          editMessage();
          closeMenu();
        "
      >
        Izmjeni poruku
      </li>
    </ul>
  </div>
</template>
<script>
import { directive as onClickaway } from "vue-clickaway";

export default {
  directives: {
    onClickaway: onClickaway,
  },
  props: ["messages", "registered_id", "all_nutricionist"],
  data() {
    return {
      finalArray: [],
      all_messages: [],
      current: 0,
      message_from: this.messages[0].from,
      new_message: "",
      active_to:
        this.messages[0].to != this.registered_id
          ? (this.active_to = this.messages[0].to)
          : (this.active_to = this.messages[0].from),
      search: "",
      viewMenu: false,
      top: "0px",
      left: "0px",
      active_id: "",
      active_element: "",
      active_message: "",
      edit: [],
      expand: false,
      search_message: "",
      isEditing: false,
      isFirst: true,
    };
  },
  computed: {
    filtered: function () {
      return this.finalArray.filter((message) => {
        return message.name.toLowerCase().match(this.search.toLowerCase());
      });
    },
    filteredMessage: function () {
      if (this.all_messages.lenght == 0) return [];

      return this.all_messages.filter((message) => {
        return message.message
          .toLowerCase()
          .match(this.search_message.toLowerCase());
      });
    },
    dataMessage() {},
  },
  created() {
    if (!this.messages[0].empty)
      this.readMessages(this.messages[0].from, this.messages[0].to);
    this.makeFinale();
  },
  watch: {
    current: function (val) {
      this.finalArray[val].to != this.registered_id
        ? (this.active_to = this.finalArray[val].to)
        : (this.active_to = this.finalArray[val].from);
      if (typeof this.active_to == "undefined")
        this.active_to = this.finalArray[val].id;
    },
  },
  methods: {
    shortMessages(str = "", maxLen, separator = " ") {
      console.log(str);
      if (str.length <= maxLen) return str;

      console.log(str.lastIndexOf(separator, maxLen));
      if (str.lastIndexOf(separator, maxLen) == -1) {
        return str.substr(0, 120) + "...";
      }

      return str.substr(0, str.lastIndexOf(separator, maxLen)) + "...";
    },
    makeFinale() {
      var names = new Set(this.messages.map((message) => message.name));
      var merged = [
        ...this.messages,
        ...this.all_nutricionist.filter((d) => !names.has(d.name)),
      ];
      this.messages[0].empty
        ? (this.finalArray = this.all_nutricionist)
        : (this.finalArray = merged);
    },
    formatDate(date = "", update = "") {
      if (date == "") return;
      let dateObject = new Date(date);
      const updateObject = new Date(update);

      if (updateObject.getTime() > dateObject.getTime())
        dateObject = updateObject;

      return `${dateObject.getHours()}:${dateObject.getMinutes()} | ${dateObject.toLocaleString(
        "default",
        { month: "short" }
      )} ${dateObject.getDate()}`;
    },
    toggleHamburger() {
      if (typeof this.$refs.messagesContainer !== "undefined") {
        this.$refs.messagesContainer.classList.toggle("mini-inbox");
      }
    },
    readMessages(from, to) {
      this.new_message = "";
      axios
        .get(`./api/message/${from}`, {
          params: {
            to: to,
          },
        })
        .then((response) => {
          console.log(response);

          this.all_messages = response.data.messages;
          this.$nextTick(() => {
            this.$refs.messagesScroll.scrollTop = this.$refs.messagesScroll.scrollHeight;

            if (window.innerWidth < 992 && !this.isFirst) {
              this.toggleHamburger();
            }
            this.isFirst = false;
          });
          this.active = true;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    },
    sendMessage() {
      if (this.new_message == "" || this.new_message.match(/^ *$/) !== null)
        return;
      if (this.isEditing) {
        axios
          .patch(`/api/message/${this.active_id}`, {
            message: this.new_message,
          })
          .then((response) => {
            console.log("responsee", response);
            if (
              this.all_messages[this.all_messages.length - 1].id ==
              this.active_id
            ) {
              this.finalArray[this.current].message = response.data.message;
              this.finalArray[this.current].created_at =
                response.data.updated_at;
            }

            const index = this.all_messages.findIndex(
              ({ id }) => id == this.active_id
            );
            this.all_messages[index].created_at = response.data.updated_at;
            this.all_messages[index].message = this.new_message;
            this.new_message = "";
            this.isEditing = false;
          })
          .catch(function (error) {
            console.log(error);
          });
        return;
      }
      axios
        .post("./api/message", {
          message: this.new_message,
          to: this.active_to,
        })
        .then((response) => {
          if (this.messages[0].empty) this.messages[0].empty = false;
          this.all_messages.push(response.data);
          this.new_message = "";
          this.finalArray[this.current].from = this.registered_id;
          this.finalArray[this.current].to = this.finalArray[this.current].id;

          this.finalArray[this.current].message = response.data.message;
          this.finalArray[this.current].created_at = response.data.created_at;

          this.$nextTick(() => {
            this.$refs.messagesScroll.scrollTop = this.$refs.messagesScroll.scrollHeight;
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteMessage() {
      axios
        .delete(`./api/message/${this.active_id}`)
        .then((response) => {
          if (this.all_messages.length == 1) {
            this.finalArray[this.current].message = "";
            this.finalArray[this.current].created_at = "";

            // this.finalArray[this.current].created_at = "";
            this.all_messages = [];
            this.closeMenu();

            return;
          }
          if (
            this.all_messages[this.all_messages.length - 1].id == this.active_id
          ) {
            this.finalArray[this.current].message = this.all_messages[
              this.all_messages.length - 2
            ].message;
            this.finalArray[this.current].created_at = this.all_messages[
              this.all_messages.length - 2
            ].created_at;
          }

          this.closeMenu();
          this.all_messages.splice(
            this.all_messages.findIndex(({ id }) => id == this.active_id),
            1
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    editMessage() {
      this.new_message = this.active_message;
      this.isEditing = true;
      this.edit.push(this.active_id);
    },
    setMenu(top, left) {
      // window.innerHeight je visina cijelog ekrana, offsetHeight je tog elementa
      const largestHeight =
        window.innerHeight - this.$refs.right.offsetHeight - 25;

      const largestWidth =
        window.innerWidth - this.$refs.right.offsetWidth - 25;

      if (top > largestHeight) top = largestHeight;

      if (left > largestWidth) left = largestWidth;

      this.top = top + "px";
      this.left = left + "px";
    },

    closeMenu() {
      this.viewMenu = false;
      this.active_element.classList.remove("active_message");
    },

    openMenu(e, id) {
      if (this.active_element != "")
        this.active_element.classList.remove("active_message");

      this.viewMenu = true;
      this.active_id = id;
      this.active_element = e.target;
      this.active_element.classList.add("active_message");

      this.$nextTick(() => {
        this.$refs.right.focus();

        this.setMenu(e.y, e.x);
      });
      e.preventDefault();
    },
  },
};
</script>
