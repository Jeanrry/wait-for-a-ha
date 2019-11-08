<template>
  <svg :width="scale*100" :height="scale*100" xmlns="http://www.w3.org/2000/svg">
    <g :style="{ transform: 'scale(' + scale + ')' }">
      <circle cx="25" cy="50" :r="rA * 5" :stroke="colorA" :fill="colorA" stroke-width="1">
        <animate
          attributeType="CSS"
          attributeName="r"
          begin="0s; aba1069d8b7a4d5e2f8d3bce2636c6a210.end"
          id="32797a13d5ca0ea2b07661ca785ed8883"
          :from="rA * 5"
          :to="reRA * 6"
          dur="0.5s"
        />
      </circle>
      <circle cx="50" cy="50" :r="rB * 5" :stroke="colorB" :fill="colorB" stroke-width="1">
        <animate
          attributeType="CSS"
          attributeName="r"
          begin="32797a13d5ca0ea2b07661ca785ed8883.end"
          id="25e909634ecaa5efc29f70abff87dbf42"
          :from="rB * 5"
          :to="reRB * 6"
          dur="0.5s"
        />
      </circle>
      <circle cx="75" cy="50" :r="rB * 5" :stroke="colorC" :fill="colorC" stroke-width="1">
        <animate
          attributeType="CSS"
          attributeName="r"
          begin="25e909634ecaa5efc29f70abff87dbf42.end"
          id="aba1069d8b7a4d5e2f8d3bce2636c6a210"
          :from="rC * 5"
          :to="reRC * 6"
          dur="0.5s"
        />
      </circle>
    </g>
  </svg>
</template>

<script>
export default {
  name: "wait-b",
  props: {
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: [Number, Array],
      default: 1
    },
    reRadius: {
      type: [Number, Array],
      default: 1
    },
    colorA: {
      type: String,
      default: "#000000"
    },
    colorB: {
      type: String,
      default: "#000000"
    },
    colorC: {
      type: String,
      default: "#000000"
    }
  },
  computed: {
    rA() {
      return this.getRadius(this.radius, 0)
    },
    rB() {
      return this.getRadius(this.radius, 1)
    },
    rC() {
      return this.getRadius(this.radius, 2)
    },
    reRA() {
      return this.getRadius(this.reRadius, 0)
    },
    reRB() {
      return this.getRadius(this.reRadius, 1)
    },
    reRC() {
      return this.getRadius(this.reRadius, 2)
    }
  },
  data() {
    return {};
  },
  methods: {
    getRadius(list, index) {
      if (this.getTypeOfRadius(list) === "number") {
        return list;
      } else if (this.getTypeOfRadius(list) === "array") {
        return list[index];
      } else {
        return 1;
      }
    },
    getTypeOfRadius(value) {
      if (typeof value === "number") {
        return "number";
      } else if (
        typeof value === "object" &&
        typeof value[0] === "number" &&
        typeof value[1] === "number" &&
        typeof value[2] === "number"
      ) {
        return "array";
      } else {
        return "unexpectedType";
      }
    },
  }
};
</script>

<style scoped>
</style>
