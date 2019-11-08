<template>
  <svg :width="scale*100" :height="scale*100" xmlns="http://www.w3.org/2000/svg">
    <g :style="{ transform: 'scale(' + scale + ')' }">
      <path
        id="8f72afba9b89bb1b50707461bbb2ab3b5"
        d="M75 50
                A 12.5 12.5 0 0 0 50 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="5d4a32d820c27e36645ab7563d7b88312"
        d="M50 50
                A 12.5 12.5 0 0 1 25 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="c57afbcba58c9895a5651898e50dbf422"
        d="M25 50
                A 25 25 0 0 1 75 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="c57afbcba58c9895a5651898e50dbf423"
        d="M25 50
                A 12.5 12.5 0 0 1 50 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="529271345b04f3e7b5c30c5b4070c95010"
        d="M50 50
                A 12.5 12.5 0 0 0 75 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="529271345b04f3e7b5c30c5b4070c9509"
        d="M75 50
                A 25 25 0 0 1 25 50"
        stroke="transparent"
        fill="transparent"
      />
      <path
        id="32ecf13375f53e202ea2fe019db3d9271"
        d="M25 50"
        stroke="transparent"
        fill="transparent"
      />
      <circle :r="ballARadius * 5" :stroke="computedBorderColorA" :fill="colorA" stroke-width="1">
        <animateMotion
          begin="0s"
          id="a98c8a727f369f694b26f0478f2e57108"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#32ecf13375f53e202ea2fe019db3d9271" />
        </animateMotion>
        <animateMotion
          begin="a98c8a727f369f694b26f0478f2e57108.end; 14183aa86e250ea21390ca2078f701ce10.end + 1s"
          id="32ecf13375f53e202ea2fe019db3d9276"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#c57afbcba58c9895a5651898e50dbf423" />
        </animateMotion>
        <animateMotion
          begin="32ecf13375f53e202ea2fe019db3d9276.end + 1s"
          id="a98c8a727f369f694b26f0478f2e571088"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#529271345b04f3e7b5c30c5b4070c95010" />
        </animateMotion>
        <animateMotion
          begin="a98c8a727f369f694b26f0478f2e571088.end + 1s"
          id="14183aa86e250ea21390ca2078f701ce10"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#529271345b04f3e7b5c30c5b4070c9509" />
        </animateMotion>
      </circle>
      <circle :r="ballBRadius * 5" :stroke="computedBorderColorB" :fill="colorB" stroke-width="1">
        <animateMotion
          begin="0s; 5bc7d5e2eeb068c63550eb4910756b171.end + 1s"
          id="49ad99ac0d2c1aaaca8064ce384178c73"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#529271345b04f3e7b5c30c5b4070c95010" />
        </animateMotion>
        <animateMotion
          begin="49ad99ac0d2c1aaaca8064ce384178c73.end + 1s"
          id="49ad99ac0d2c1aaaca8064ce384178c76"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#529271345b04f3e7b5c30c5b4070c9509" />
        </animateMotion>
        <animateMotion
          begin="49ad99ac0d2c1aaaca8064ce384178c76.end + 1s"
          id="5bc7d5e2eeb068c63550eb4910756b171"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#c57afbcba58c9895a5651898e50dbf423" />
        </animateMotion>
      </circle>
      <circle :r="ballCRadius * 5" :stroke="computedBorderColorC" :fill="colorC" stroke-width="1">
        <animateMotion
          begin="0s; b423ec35d98d700b98e475f7694dcb9110.end"
          id="5bc7d5e2eeb068c63550eb4910756b1710"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#8f72afba9b89bb1b50707461bbb2ab3b5" />
        </animateMotion>
        <animateMotion
          begin="5bc7d5e2eeb068c63550eb4910756b1710.end"
          id="b423ec35d98d700b98e475f7694dcb915"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#5d4a32d820c27e36645ab7563d7b88312" />
        </animateMotion>
        <animateMotion
          begin="b423ec35d98d700b98e475f7694dcb915.end"
          id="b423ec35d98d700b98e475f7694dcb9110"
          dur="1s"
          repeatCount
          fill="freeze"
          restart="always"
        >
          <mpath xlink:href="#c57afbcba58c9895a5651898e50dbf422" />
        </animateMotion>
      </circle>
    </g>
  </svg>
</template>

<script>
export default {
  name: "wait-a",
  props: {
    scale: {
      type: Number,
      default: 1
    },
    border: {
      type: Boolean,
      default: true
    },
    radius: {
      type: [Number, Array],
      default: 1
    },
    colorA: {
      type: String,
      default: "#000000"
    },
    borderColorA: {
      type: String,
      default: this.colorA
    },
    colorB: {
      type: String,
      default: "#000000"
    },
    borderColorB: {
      type: String,
      default: this.colorB
    },
    colorC: {
      type: String,
      default() {
        if (this.border) {
          return "transparent";
        } else {
          return "#909399";
        }
      }
    },
    borderColorC: {
      type: String,
      default() {
        if (this.border) {
          return "#000000";
        } else {
          return this.colorC;
        }
      }
    }
  },
  computed: {
    getTypeOfRadius() {
      if (typeof this.radius === "number") {
        return "number";
      } else if (
        typeof this.radius === "object" &&
        typeof this.radius[0] === "number" &&
        typeof this.radius[1] === "number" &&
        typeof this.radius[2] === "number"
      ) {
        return "array";
      } else {
        return "unexpectedType";
      }
    },
    ballARadius() {
      if (this.getTypeOfRadius === "number") {
        return this.radius;
      } else if (this.getTypeOfRadius === "array") {
        return this.radius[0];
      } else {
        return 1;
      }
    },
    ballBRadius() {
      if (typeof this.radius === "number") {
        return this.radius;
      } else if (this.getTypeOfRadius === "array") {
        return this.radius[1];
      } else {
        return 1;
      }
    },
    ballCRadius() {
      if (typeof this.radius === "number") {
        return this.radius;
      } else if (this.getTypeOfRadius === "array") {
        return this.radius[2];
      } else {
        return 1;
      }
    },
    computedBorderColorA() {
      if (this.border) {
        return this.borderColorA;
      } else {
        return this.colorA;
      }
    },
    computedBorderColorB() {
      if (this.border) {
        return this.borderColorB;
      } else {
        return this.colorB;
      }
    },
    computedBorderColorC() {
      if (this.border) {
        return this.borderColorC;
      } else {
        return this.colorC;
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
